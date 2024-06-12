import { EventBus, isObject, joinObjects } from 'hd-utils';
import { useCallback, useEffect, useRef, useState } from 'react';

function newObjWithKeys<T>(keyList: any[], mappedToObj: any) {
  const newObj = {};

  keyList.forEach(key => {
    (newObj as any)[key] = mappedToObj[key];
  });
  return newObj as T;
}

/**
 * @description will create a global store where state is shared among components that use the returned hook
 * @example export const useStore = createGlobalStore({a:1, b:2});
 * @returns hook that is used to connect the component with the store.
 * its its really recommended to specify the used store keys in the returned hook (as list of strings) to reduce the component rerendering.
 * @example const Component = () =>{
 * const [storeState, setStoreState] = useStore(["a"]);
 *
 * return <button onClick={()=> setStoreState({a:3})}>Click me</button>
 * }
 */
export default function createGlobalStore<T extends Record<string, any>>(
  initState: T = {} as T,
  config?: { shallowCompareOnSetState?: boolean }
) {
  if (!isObject(initState))
    throw new Error('Error: The initial state should be of type object');

  const storeState = { ...initState };
  const storeBus = new EventBus();

  type Keys = keyof typeof storeState;

  return (
    select?: Keys[],
    options?: { shallowCompareOnSetState?: boolean }
  ): [T, (s: T) => void] => {
    const { shallowCompareOnSetState } = options || {};

    const componentInitState = useRef<T>(
      Array.isArray(select) ? newObjWithKeys<T>(select, storeState) : storeState
    );

    const [state, setState] = useState(componentInitState.current);

    useEffect(() => {
      const handleStateChange = (newState: T) => {
        setState(prev => joinObjects<T>(prev, newState));
      };

      const keysList = Object.keys(componentInitState.current);

      keysList.forEach(key => {
        if (select && !select?.includes(key)) return;

        storeBus.subscribe(key, handleStateChange);
      });

      return () => {
        keysList.forEach(key => {
          storeBus.unsubscribe(key, handleStateChange);
        });
      };
    }, [select]);

    const updateState = useCallback(
      (newState: T) => {
        if (!isObject(newState))
          throw new Error('Error: The updated state should be of type object');

        Object.keys(newState).forEach(key => {
          if (select && !select?.includes(key)) return;

          if (
            (shallowCompareOnSetState ?? config?.shallowCompareOnSetState) &&
            componentInitState.current[key] === newState[key]
          )
            return;

          (componentInitState.current as any)[key] = newState[key];
          storeBus.publish(key, { ...componentInitState.current });
        });
      },
      [select, shallowCompareOnSetState]
    );

    return [state, updateState];
  };
}


import {
  EventBus,
  deepClone,
  getWindow,
  has,
  isLength,
  isNullOrUndefined,
  isObject,
  joinObjects,
} from 'hd-utils';
import { useCallback, useEffect, useRef } from 'react';
import useUpdate from '../hooks/useUpdate';

function newObjWithKeys<T>(keyList: any[], mappedToObj: any) {
  const newObj = {};

  keyList.forEach(key => {
    (newObj as any)[key] = mappedToObj[key];
  });
  return newObj as T;
}

type HookOptions = {
  // comparer: (oldState: T, newState:T) => boolean;
  resetState: (all?: boolean) => void;
};

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

  const myWindow = getWindow();
  const oldState = { ...initState };
  let storeState = isNullOrUndefined(myWindow?.structuredClone)
    ? structuredClone(initState)
    : deepClone(initState);

  const storeBus = new EventBus();

  type Keys = keyof typeof storeState;

  return (
    select?: Keys[],
    options?: { shallowCompareOnSetState?: boolean }
  ): [() => T, (s: T) => void, HookOptions] => {
    const { shallowCompareOnSetState } = options || {};
    const componentInitState = useRef<T>(
      Array.isArray(select) ? newObjWithKeys<T>(select, storeState) : storeState
    );
    const shallowCompare =
      shallowCompareOnSetState ?? config?.shallowCompareOnSetState;
    const rerender = useUpdate();

    useEffect(() => {
      const handleStateChange = (newState: T) => {
        if (isLength(newState)) {
          componentInitState.current = joinObjects(
            componentInitState.current,
            newState
          );
          storeState = joinObjects(storeState, newState);
          rerender();
        }
      };

      const keysList = Object.keys(componentInitState.current);

      for (let i = 0; i < keysList.length; i++) {
        const key = keysList[i];
        storeBus.subscribe(key, handleStateChange);
      }

      return () => {
        for (let i = 0; i < keysList.length; i++) {
          const key = keysList[i];
          storeBus.unsubscribe(key, handleStateChange);
        }
      };
    }, [rerender]);

    const updateState = useCallback(
      (newState: T) => {
        if (!isObject(newState)) {
          throw new Error('Error: The updated state should be of type object');
        }

        const keys = Object.keys(newState);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];

          if (
            (shallowCompare &&
              componentInitState.current[key] === newState[key]) ||
            !has(componentInitState.current, key)
          ) {
            continue;
          }

          storeBus.publish(key, { [key]: newState[key] });
        }
      },
      [shallowCompare]
    );

    const resetState = useCallback((all?: boolean) => {
      const keyList: string[] =
        all || !select?.length ? Object.keys(oldState) : (select as string[]);
      keyList.forEach(key => {
        storeBus.publish(key, { [key]: oldState[key] });
      });
    }, []);

    return [
      useCallback(() => componentInitState.current, []),
      updateState,
      { resetState },
    ];
  };
}

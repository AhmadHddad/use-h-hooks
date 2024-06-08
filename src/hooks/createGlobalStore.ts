import { EventBus, isArray, isObject, joinObjects } from 'hd-utils';
import { useCallback, useEffect, useMemo, useState } from 'react';

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
  initState: T = {} as T
) {
  if (initState && !isObject(initState))
    throw new Error('Error: The initial state should be of type object');

  const storeState = { ...initState };
  const storeBus = new EventBus();

  type Keys = keyof typeof storeState;

  return (select?: Keys[]): [T, (s: T) => void] => {
    const componentInitState: T = useMemo(() => {
      if (isArray(select) && select.length) {
        const obj = {};

        select.forEach(key => {
          (obj as any)[key] = storeState[key];
        });
        return obj as T;
      } else {
        return storeState;
      }
    }, [select]);
    const [state, setState] = useState(componentInitState);

    useEffect(() => {
      const handleStateChange = (newState: T) => {
        setState(prev => joinObjects<T>(prev, newState));
      };

      const keysList = Object.keys(componentInitState);

      keysList.forEach(key => {
        if (select && !select?.includes(key)) return;

        storeBus.subscribe(key, handleStateChange);
      });

      return () => {
        keysList.forEach(key => {
          storeBus.unsubscribe(key, handleStateChange);
        });
      };
    }, [componentInitState, select]);

    const updateState = useCallback(
      (newState: T) => {
        if (!isObject(newState))
          throw new Error('Error: The updated state should be of type object');

        Object.keys(newState).forEach(key => {
          if (select && !select?.includes(key)) return;

          (componentInitState as any)[key] = newState[key];
          storeBus.publish(key, { ...componentInitState });
        });
      },
      [componentInitState, select]
    );

    return [state, updateState];
  };
}

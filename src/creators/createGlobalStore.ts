import {
  EventBus,
  deepClone,
  getWindow,
  includeKeys,
  isNullOrUndefined,
  isObject,
  joinObjects,
} from 'hd-utils';
import { useCallback, useEffect, useRef } from 'react';
import useUpdate from '../hooks/useUpdate';

function newObjWithKeys<T>(
  keyList: string[],
  mappedToObj: Record<string, unknown>
) {
  const newObj: Record<string, unknown> = {};

  keyList.forEach((key: string) => {
    newObj[key] = mappedToObj[key];
  });
  return newObj as T;
}

type HookOptions = {
  resetState: (all?: boolean) => void;
};
type HookConfigs = Partial<{
  shallowCompareOnSetState: boolean;
}>;

type HookResultOptions<T> = { comparer: (oldState: T, newState: T) => boolean };

type HookResult<T> = [
  () => T,
  (s: Partial<T>, options?: HookResultOptions<T>) => void,
  HookOptions
];

const UPDATE_STATE = 'UPDATE_STATE';

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
export default function createGlobalStore<T extends Record<string, unknown>>(
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

  function useStore(select?: Keys[], configs?: HookConfigs): HookResult<T> {
    const { shallowCompareOnSetState } = configs || {};
    const componentInitState = useRef<T>(
      Array.isArray(select)
        ? newObjWithKeys<T>(select as string[], storeState)
        : storeState
    );
    const shallowCompare =
      shallowCompareOnSetState ?? config?.shallowCompareOnSetState;
    const rerender = useUpdate();

    useEffect(() => {
      const handleStateChange = (newState: Partial<T>) => {
        for (const key in newState) {
          if (
            !Object.prototype.hasOwnProperty.call(
              componentInitState.current,
              key
            )
          ) {
            return;
          }
        }

        componentInitState.current = joinObjects(
          componentInitState.current,
          newState
        );
        storeState = joinObjects(storeState, newState);
        rerender();
      };

      storeBus.subscribe(UPDATE_STATE, handleStateChange);

      return () => {
        storeBus.unsubscribe(UPDATE_STATE, handleStateChange);
      };
    }, [rerender]);

    const updateState: HookResult<T>[1] = useCallback(
      (newState, options) => {
        if (!isObject(newState)) {
          throw new Error('Error: The updated state should be of type object');
        }

        const isEqual =
          options?.comparer &&
          options.comparer(componentInitState.current, newState as T);

        if (isEqual) return;

        if (shallowCompare) {
          const keyList = select || Object.keys(componentInitState.current);
          keyList.forEach(key => {
            if (componentInitState.current[key] === newState[key]) {
              delete newState[key];
            }
          });
        }
        storeBus.publish(UPDATE_STATE, newState);
      },
      [select, shallowCompare]
    );

    const resetState: HookOptions['resetState'] = useCallback(
      all => {
        const newState =
          !all && select ? includeKeys(oldState, select as string[]) : oldState;

        storeBus.publish(UPDATE_STATE, newState);
      },
      [select]
    );

    return [
      useCallback(() => componentInitState.current, []),
      updateState,
      { resetState },
    ];
  }

  useStore.setGlobalState = function(newState: Partial<T>) {
    storeBus.publish(UPDATE_STATE, newState);
  };

  return useStore;
}

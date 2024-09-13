import { EventBus, includeKeys, isObject } from 'hd-utils';
import { useCallback, useState } from 'react';
import { useMountEffect, useMountedState } from '..';

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

type SharedConfigs = Partial<{
  shallowCompareOnSetState: string;
}>;

type GlobalStoreConfig = Partial<{
  persist: boolean;
  useMountedState: boolean;
}> &
  SharedConfigs;

type HookOptions = {
  resetState: (all?: boolean) => void;
};

type HookConfigs = Partial<{}> & SharedConfigs;

type HookResultOptions<T> = { comparer: (oldState: T, newState: T) => boolean };

type HookResult<T> = [
  T,
  (s: Partial<T>, options?: HookResultOptions<T>) => void,
  HookOptions
];

const UPDATE_STATE = 'UPDATE_STATE';

/**
 * @description will create a global store where state is shared among components that use the returned hook
 * can persist data to the local storage and use query params as state
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
  storeConfigs?: GlobalStoreConfig
) {
  if (!isObject(initState))
    throw new Error('Error: The initial state should be of type object');

  const oldState = { ...initState };

  let storeState = {
    ...initState,
  } as T;

  const storeBus = new EventBus();

  type Keys = keyof typeof storeState;

  function useStore(select?: Keys[], hookConfigs?: HookConfigs): HookResult<T> {
    const { shallowCompareOnSetState } = hookConfigs || {};
    const useSt = storeConfigs?.useMountedState ? useMountedState : useState;
    const [componentState, setComponentState] = useSt<T>(
      Array.isArray(select)
        ? newObjWithKeys<T>(select as string[], storeState)
        : storeState
    );

    const shallowCompare =
      shallowCompareOnSetState ?? storeConfigs?.shallowCompareOnSetState;

    useMountEffect(() => {
      const handleStateChange = (newState: Partial<T>) => {
        for (const key in newState) {
          if (!Object.prototype.hasOwnProperty.call(componentState, key)) {
            return;
          }
        }
        storeState = { ...storeState, ...newState };

        setComponentState(prev => ({ ...prev, ...newState }));
      };

      storeBus.subscribe(UPDATE_STATE, handleStateChange);

      return () => {
        storeBus.unsubscribe(UPDATE_STATE, handleStateChange);
      };
    });

    const updateState: HookResult<T>[1] = useCallback(
      (newState, options) => {
        if (!isObject(newState)) {
          throw new Error('Error: The updated state should be of type object');
        }

        const isEqual =
          options?.comparer && options.comparer(componentState, newState as T);

        if (isEqual) return;

        if (shallowCompare) {
          const keyList = select || Object.keys(componentState);
          keyList.forEach(key => {
            if (componentState[key] === newState[key]) {
              delete newState[key];
            }
          });
        }
        storeBus.publish(UPDATE_STATE, newState);
      },
      [componentState, select, shallowCompare]
    );

    const resetState: HookOptions['resetState'] = useCallback(
      all => {
        const newState =
          !all && select ? includeKeys(oldState, select as string[]) : oldState;

        storeBus.publish(UPDATE_STATE, newState);
      },
      [select]
    );

    return [componentState, updateState, { resetState }];
  }

  useStore.setGlobalState = function(newState: Partial<T>) {
    storeBus.publish(UPDATE_STATE, newState);
  };

  return useStore;
}

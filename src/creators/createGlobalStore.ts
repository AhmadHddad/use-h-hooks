import {
  EventBus,
  getWindow,
  includeKeys,
  isObject,
  parseUrl,
  stringifyUrl,
} from 'hd-utils';
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
  queryPrefix: string;
  shallowCompareOnSetState: string;
}>;

type GlobalStoreConfig = Partial<{
  persist: boolean;
  useMountedState: boolean;
  url: string;
  useQueryParams: boolean;
  persistKey: string;
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
 * @example export const useStore = createGlobalStore({a:1, b:2}, {persist:true, persistKey:"example_store"}); // localStorage.getItem("example_store"):"{a:1, b:2}"
 * @example export const useStore = createGlobalStore({a:1, b:2});
 * @example export const useStore = createGlobalStore({a:1, b:2}, {useQueryParams:true}); //www.example.com/?h_store_a=1&h_store_b=2
 * @example export const useStore = createGlobalStore({a:1, b:2}, {useQueryParams:true,queryPrefix:"example_"}); //www.example.com/?example_a=1&example_b=2
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

  const myWindow = getWindow();
  const queryPrefix = storeConfigs?.queryPrefix || 'h_store_';
  const persistKey = storeConfigs?.persistKey || 'h_store';
  const url = storeConfigs?.url || myWindow.location.href;
  const oldState = { ...initState };
  const oldStateFromQuery = storeConfigs?.useQueryParams
    ? (getInitStateFromQuery(url, queryPrefix) as T)
    : {};
  const oldStateFromPersist = storeConfigs?.persist
    ? getInitStateFromPersist(persistKey)
    : {};

  let storeState = {
    ...initState,
    ...oldStateFromQuery,
    ...oldStateFromPersist,
  } as T;

  const storeBus = new EventBus();

  type Keys = keyof typeof storeState;

  if (storeConfigs?.useQueryParams) {
    updateQueryParams(url, storeState, queryPrefix);
  }

  if (storeConfigs?.persist) {
    myWindow.localStorage.setItem(persistKey, JSON.stringify(storeState));
  }

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

        if (storeConfigs?.useQueryParams) {
          updateQueryParams(url, storeState, queryPrefix);
        }

        if (storeConfigs?.persist) {
          myWindow.localStorage.setItem(persistKey, JSON.stringify(storeState));
        }

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

function updateQueryParams(
  url: string,
  state: Record<string, unknown>,
  queryPrefix: string
) {
  const updatedState: any = {};

  for (const key in state) {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      const element = state[key];
      updatedState[queryPrefix + key] = element;
    }
  }

  const updatedUrl = stringifyUrl({ url: url, query: updatedState });
  updateURL(updatedUrl);
}

function getInitStateFromQuery(url: string, queryPrefix: string) {
  const parsedUrl = parseUrl(url);

  const initQuery: any = {};

  for (const key in parsedUrl.query) {
    if (Object.prototype.hasOwnProperty.call(parsedUrl.query, key)) {
      const element = parsedUrl.query[key];
      let queryKey = key;
      if (queryKey.startsWith(queryPrefix)) {
        queryKey = key.replace(queryPrefix, '');
      }

      initQuery[queryKey] =
        typeof element === 'string' && !Number.isNaN(Number(element))
          ? Number(element)
          : element;
    }
  }

  return initQuery;
}

function getInitStateFromPersist(persistKey: string) {
  const myWindow = getWindow();
  const st = myWindow.localStorage.getItem(persistKey);
  if (st) return JSON.parse(st);
  return {};
}

function updateURL(url: string) {
  const myWindow = getWindow();
  myWindow.history.pushState(myWindow.history.state, '', url);
}

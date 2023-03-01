import { useCallback, useMemo, useState } from 'react';

export interface StableActions<T extends object> {
  set: <K extends keyof T>(key: K, value: T[K]) => void;
  setAll: (newMap: T) => void;
  remove: <K extends keyof T>(key: K) => void;
  reset: () => void;
}

export interface Actions<T extends object> extends StableActions<T> {
  get: <K extends keyof T>(key: K) => T[K];
}

/**
 * @description React state hook that tracks a value of an object.
 * @example `
const Demo = () => {
  const [map, {set, setAll, remove, reset}] = useMap({
    hello: 'there',
  });

  return (
    <div>
      <button onClick={() => set(String(Date.now()), new Date().toJSON())}>
        Add
      </button>
      <button onClick={() => reset()}>
        Reset
      </button>
      <button onClick={() => setAll({ hello: 'new', data: 'data' })}>
        Set new data
      </button>
      <button onClick={() => remove('hello')} disabled={!map.hello}>
        Remove 'hello'
      </button>
      <pre>{JSON.stringify(map, null, 2)}</pre>
    </div>
  );
};`
 */
const useMap = <T extends object = any>(
  initialMap: T = {} as T
): [T, Actions<T>] => {
  const [map, set] = useState<T>(initialMap);

  const stableActions = useMemo<StableActions<T>>(
    () => ({
      set: (key, entry) => {
        set(prevMap => ({
          ...prevMap,
          [key]: entry,
        }));
      },
      setAll: (newMap: T) => {
        set(newMap);
      },
      remove: key => {
        set(prevMap => {
          const { [key]: omit, ...rest } = prevMap;
          return rest as T;
        });
      },
      reset: () => set(initialMap),
    }),
    [set]
  );

  const utils = {
    get: useCallback(key => map[key], [map]),
    ...stableActions,
  } as Actions<T>;

  return [map, utils];
};

export default useMap;

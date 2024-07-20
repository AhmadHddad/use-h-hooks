import { useCallback, useMemo } from 'react';
import useMountedState from './useMountedState';
import { Actions, StableActions } from '../types';

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
const useMapState = <T extends object = any>(
  initialMap: T = {} as T
): [T, Actions<T>] => {
  const [map, set] = useMountedState<T>(initialMap);

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

export default useMapState;

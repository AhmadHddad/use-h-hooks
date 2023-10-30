import { isNullOrUndefined } from 'hd-utils';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

/**
 * @description useSafeState will be update the value if its only not null or undefined, so unless there is a value it will update.
 */
export default function useSafeState<T>(
  val: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, set] = useState(val);

  const setState = useCallback((v: SetStateAction<T> | null) => {
    if (isNullOrUndefined(v)) return;

    set(v);
  }, []);

  return [state, setState];
}

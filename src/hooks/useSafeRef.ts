import { isNullOrUndefined } from 'hd-utils';
import { useCallback, useEffect, useRef } from 'react';

/**
 * @description will provide the latest value unless its null or undefined
 */
export default function useSafeRef<T>(val: T): [() => T] {
  const ref = useRef(val);

  useEffect(() => {
    if (isNullOrUndefined(val)) return;

    ref.current = val;
  }, [val]);

  const get = useCallback(() => ref.current, []);

  return [get];
}

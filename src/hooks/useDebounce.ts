import { useMemo } from 'react';
import { debounce, isDev, isFunction } from 'hd-utils';
import useLatest from './useLatest';
import useUnmount from './useUnmount';

/**
 * @description React hooks that debounce function
 */
export default function useDebounce<T extends (...args: any) => any>(
  fn: T,
  wait?: number,
  options?: {
    leading: boolean;
    trailing: boolean;
    maxWait: number;
  }
) {
  if (isDev()) {
    if (!isFunction(fn)) {
      console.error(
        `useDebounce expected parameter is a function, got ${typeof fn}`
      );
    }
  }

  const fnRef = useLatest(fn);

  const debounced = useMemo(
    () =>
      debounce(
        //@ts-ignore
        (...args: [...Parameters<T>]): ReturnType<T> => {
          return fnRef.current(...args);
        },
        wait,
        options
      ),
    [options, wait]
  );

  useUnmount(() => {
    debounced.cancel();
  });

  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush,
  };
}

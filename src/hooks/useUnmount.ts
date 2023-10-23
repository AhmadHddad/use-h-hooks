import { useEffect } from "react";
import { isDev, isFunction } from "hd-utils";
import useLatest from "./useLatest";


/**
 * @description React lifecycle hook that calls a function when the component will unmount
 */
export default function useUnmount(fn: () => void) {
  if (isDev()) {
    if (!isFunction(fn)) {
      console.error(
        `useUnmount expected parameter is a function, got ${typeof fn}`,
      );
    }
  }

  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    [fnRef],
  );
}

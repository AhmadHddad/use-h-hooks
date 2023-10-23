import type { MutableRefObject } from "react";
import { useEffect, useRef } from "react";


/**
 * @function useLatest
 * @description React state hook that returns the latest state as described in the React hooks FAQ.
 * This is mostly useful to get access to the latest value of some props or state inside an asynchronous callback, instead of that value at the time the callback was created from
*/
export default function useLatest<T>(value: T): MutableRefObject<T> {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}
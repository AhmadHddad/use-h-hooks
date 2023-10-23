import {  intersectionObserver } from "hd-utils";
import { useEffect } from "react";
import useMountedState from "./useMountedState";
import { UseIntersectionObserverParams, UseIntersectionObserverReturn } from "../types";

/**
 * @description a hook that returns isInView when the passed element is in view
 * @example 
 *   const { isInView } = useIntersectionObserver({
    element,
    stop,
  });

 */
export default function useIntersectionObserver({
  element,
  stop,
  fallbackInView,
  onInView,
  ...options
}: UseIntersectionObserverParams): UseIntersectionObserverReturn {
  const [isInView, setIsInView] = useMountedState(false);

  useEffect(() => {
    if (!element || stop) return;

    const observer = intersectionObserver(
      element,
      (inView, entry) => {
        setIsInView(inView);
        if (isInView) {
          onInView?.(entry);
        }
      },
      options,
      fallbackInView
    );

    return observer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element, setIsInView, onInView, stop]);

  return { isInView };
}

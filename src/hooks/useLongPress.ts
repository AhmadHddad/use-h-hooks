import { useCallback, useRef } from 'react';
import { on, off } from '../utils';

interface Options {
  isPreventDefault?: boolean;
  delay?: number;
}

const isTouchEvent = (ev: Event): ev is TouchEvent => {
  return 'touches' in ev;
};

const preventDefault = (ev: Event) => {
  if (!isTouchEvent(ev)) return;

  if (ev.touches.length < 2 && ev.preventDefault) {
    ev.preventDefault();
  }
};

/**
 * @description React sensor hook that fires a callback after long pressing.
 */
const useLongPress = (
  callback: (e: TouchEvent | MouseEvent) => void,
  { isPreventDefault = true, delay = 300 }: Options = {}
) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const target = useRef<EventTarget>();

  const start = useCallback(
    (event: TouchEvent | MouseEvent) => {
      // prevent ghost click on mobile devices
      if (isPreventDefault && event.target) {
        on(event.target, 'touchend', preventDefault, { passive: false });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => callback(event), delay);
    },
    [callback, delay, isPreventDefault]
  );

  const clear = useCallback(() => {
    // clearTimeout and removeEventListener
    timeout.current && clearTimeout(timeout.current);

    if (isPreventDefault && target.current) {
      off(target.current, 'touchend', preventDefault);
    }
  }, [isPreventDefault]);

  return {
    onMouseDown: (e: any) => start(e),
    onTouchStart: (e: any) => start(e),
    onMouseUp: clear,
    onMouseLeave: clear,
    onTouchEnd: clear,
  } as const;
};

export default useLongPress;

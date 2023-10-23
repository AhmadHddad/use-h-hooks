import { useEffect, useState } from 'react';

/**
 * @description React state hook that returns the previous state as described in the React hooks FAQ
 */
export default function usePrevious<T>(
  state: T,
  updateIfChanged?: boolean
): T | undefined {
  const [prevState, setPrevState] = useState<T>();

  useEffect(() => {
    if (updateIfChanged && prevState !== state) {
      setPrevState(state);
    } else {
      setPrevState(state);
    }
  }, [state, prevState, updateIfChanged]);

  return state;
}

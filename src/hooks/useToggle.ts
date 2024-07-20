import { useCallback } from 'react';
import useMountedState from './useMountedState';

/**
 * @description useState but with toggle flags, when update is called will "toggle" the value 
 * @example const [state, toggleState] = useToggle(false);
 * toggleState(); // you can either pass a boolean or nothing it will toggle the previous state
 */
export default function useToggle(
  initialValue?: boolean
): [boolean, (nextVal?: boolean) => void] {
  const [val, setVal] = useMountedState(Boolean(initialValue));

  const updateVal = useCallback((nextVal?: boolean) => {
    setVal(prev => (typeof nextVal === 'boolean' ? nextVal : !prev));
  }, []);

  return [val, updateVal];
}

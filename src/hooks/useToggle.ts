import { useCallback, useState } from 'react';

/**
 * @description useState but with toggle flags, when update is called will "toggle" the value 
 */
export default function useToggle(
  initialValue?: boolean
): [boolean, (nextVal?: boolean) => void] {
  const [val, setVal] = useState(Boolean(initialValue));

  const updateVal = useCallback((nextVal?: boolean) => {
    setVal(prev => (typeof nextVal === 'boolean' ? nextVal : !prev));
  }, []);

  return [val, updateVal];
}

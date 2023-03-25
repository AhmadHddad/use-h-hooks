import { useCallback, useState } from 'react';

export default function useToggle(
  initialValue?: boolean
): [boolean, (nextVal?: boolean) => void] {
  const [val, setVal] = useState(Boolean(initialValue));

  const updateVal = useCallback(
    (nextVal?: boolean) => {
      setVal(prev => (typeof nextVal === 'boolean' ? nextVal : !prev));
    },
    []
  );

  return [val, updateVal];
}

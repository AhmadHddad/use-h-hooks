import { useEffect } from 'react';
import useFirstMountState from './useFirstMountState';


/**
 *@description React effect hook that ignores the first invocation (e.g. on mount). The signature is exactly the same as the useEffect hook.
 */
const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirstMount = useFirstMountState();

  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;

import { EffectCallback, useEffect } from 'react';


/**
 *@description will call the passed effect once per page mount.
 */
const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, []);
};

export default useEffectOnce;

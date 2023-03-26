import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import useIsMounted from './useIsMounted';

/**
 * @description will set the state only when the component is mounted.
 */
export default function useMountedState<S = undefined>(
  initialState?: S
): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState<S>(initialState as any);
  const isMounted = useIsMounted();

  return [
    state,
    useCallback(
      nextState => {
        isMounted() && setState(nextState);
      },
      [isMounted]
    ),
  ];
}

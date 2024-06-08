import React, { SetStateAction, Dispatch } from 'react';
import useMountedState from './useMountedState';

/**
 *@description React hook for state as object, when u call setState({a:2}) => will only update the key a with the value 2
 @example const [state, setState] = useObjectState({a:1, b:2})
console.log(state.a) //1
setState({a:3})
setState(prev => ({...prev, a: prev.a + 3}))
 */
export default function useObjectState<S extends Record<string, any>>(
  initialState: S
): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = useMountedState(initialState || {});

  const onSetState = React.useCallback(
    //@ts-ignore
    (newState: SetStateAction<S> = S | ((prevState: S) => S)) => {
      if (typeof newState === 'function') {
        setState(newState);
      } else if (typeof newState === 'object') {
        setState(prev => ({ ...prev, ...newState }));
      }
    },
    []
  );

  //@ts-ignore
  return [state, onSetState];
}

import React, { SetStateAction, Dispatch } from 'react';

/**
 *@description React hook for state as object, when u call setState({a:2}) => will only update the key a with the value 2
 */
export default function useObjectState<S = {}>(
  initialState: S
): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = React.useState(initialState || {});

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

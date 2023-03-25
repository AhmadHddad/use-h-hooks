import { useEffect, useState, useCallback, Key, useRef } from 'react';

export type AsyncFunc<T> = (...params: any[]) => Promise<T>;
export type onError = (error: any) => void;

export type UseAsyncCallParam<T> = {
  asyncFunc: AsyncFunc<T | undefined | void>;
  defaultValue?: T;
  throwError?: boolean;
  runOnMount?: boolean;
  runNow?: boolean;
  onError?: onError;
  errorHandler?: (e: any) => void;
};

export type UseAsyncCallReturnType<T> = {
  run: (...params: any[]) => Promise<T | undefined | void>;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  val?: T;
};

export type Value =
  | boolean
  | string
  | number
  | React.ReactNode
  | Key
  | object
  | undefined
  | null
  | [];

/**
 *@description React hook for calling async functions calls will return the state isLoading, isError
 * it will run at first mount unless you define otherwise.
 */
export default function useAsyncCall<T extends Value>({
  asyncFunc,
  defaultValue,
  runOnMount = true,
  onError,
  errorHandler,
  throwError = false,
}: UseAsyncCallParam<T>): UseAsyncCallReturnType<T> {
  const throwErrorRef = useRef(throwError);
  const [state, setState] = useState<T | undefined>(defaultValue);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const mainCall = useCallback(
    async function () {
      setIsLoading(true);
      try {
        //@ts-ignore
        // eslint-disable-next-line prefer-rest-params
        const val = await asyncFunc(...arguments);
        setIsError(false);
        if (val) setState(val);
        setIsSuccess(true);
        setIsLoading(false);
        return val;
      } catch (error) {
        setIsSuccess(false);
        onError?.(error);
        setIsError(true);
        setIsLoading(false);
        if (errorHandler) errorHandler(error);

        //@ts-ignore
        if (throwErrorRef.current) throw new Error(error);
      }
    },
    [asyncFunc, errorHandler, onError]
  );

  useEffect(() => {
    if (runOnMount) {
      mainCall();
    }

    return () => {
      setIsLoading(false);
      setState(undefined);
      setIsError(false);
      setIsSuccess(false);
    };
  }, [asyncFunc, onError, mainCall, runOnMount]);

  const onRun = useCallback(
    function () {
      throwErrorRef.current = true;

      //@ts-ignore
      // eslint-disable-next-line prefer-rest-params
      return mainCall(...arguments);
    },
    [mainCall]
  );

  return { run: onRun, val: state, isLoading, isError, isSuccess };
}

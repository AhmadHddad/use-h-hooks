import { useEffect, useCallback, Key, useRef } from 'react';
import useMountedState from './useMountedState';
export type FunctionReturningPromise = (...args: any[]) => Promise<any>;
export type PromiseType<P extends Promise<any>> = P extends Promise<infer T>
  ? T
  : never;

export type onError = (error: any) => void;

export type UseAsyncCallParam<T extends (...args: any) => any = any> = {
  asyncFunc: T;
  defaultValue?: ReturnType<T>;
  throwError?: boolean;
  runOnMount?: boolean;
  runNow?: boolean;
  onSuccess?: (param: Awaited<ReturnType<T>>) => void;
  onError?: onError;
  errorHandler?: (e: any) => void;
};

export type UseAsyncCallReturnType<T extends (...args: any) => any> = {
  run: T;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  val?: Awaited<ReturnType<T>>;
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
export default function useAsyncCall<T extends FunctionReturningPromise>({
  asyncFunc,
  defaultValue,
  runOnMount = true,
  onError,
  onSuccess,
  errorHandler,
  throwError = false,
}: UseAsyncCallParam<T>): UseAsyncCallReturnType<T> {
  const throwErrorRef = useRef(throwError);
  const [state, setState] = useMountedState<ReturnType<T> | undefined>(
    defaultValue
  );
  const [isLoading, setIsLoading] = useMountedState(false);
  const [isSuccess, setIsSuccess] = useMountedState(false);
  const [isError, setIsError] = useMountedState(false);

  const mainCall = useCallback(
    async function() {
      setIsLoading(true);
      try {
        //@ts-ignore
        // eslint-disable-next-line prefer-rest-params
        const val = await asyncFunc(...arguments);
        if (val) setState(val);
        onSuccess?.(val);
        setIsError(false);
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

  const onRun: any = useCallback(
    function() {
      // this will make the run function behave much like the normal behavior, because when you call an async funciton
      // it should throw when error.
      // i don't we might add a way to override it in the future.
      throwErrorRef.current = true;

      //@ts-ignore
      // eslint-disable-next-line prefer-rest-params
      return mainCall(...arguments);
    },
    [mainCall]
  );

  //@ts-ignore
  return { run: onRun, val: state, isLoading, isError, isSuccess };
}

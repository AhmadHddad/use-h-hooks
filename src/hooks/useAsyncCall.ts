import { useEffect, useCallback, useRef, useState } from 'react';
import { UseAsyncCallParam, UseAsyncCallReturnType } from '../types';
import { FunctionReturningPromise, PAwaited } from 'hd-utils';

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
  cacheKey,
}: UseAsyncCallParam<T>): UseAsyncCallReturnType<T> {
  const throwErrorRef = useRef(throwError);
  const [isLoading, setIsLoading] = useState(runOnMount);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [state, setState] = useState<PAwaited<ReturnType<T>> | undefined>(
    defaultValue
  );

  const cache = useRef<Map<string, ReturnType<T>> | null>(null);
  const cacheKeyRef = useRef<string | undefined>(cacheKey);
  const abortControllerRef = useRef<AbortController | null>(null);

  const loadDataFromCache = useCallback(() => {
    if (cache.current && cacheKeyRef.current) {
      const cachedData = cache.current.get(cacheKeyRef.current);
      if (cachedData !== undefined) {
        setState(cachedData as PAwaited<ReturnType<T>>);
        setIsSuccess(true);
        setIsError(false);
      }
    }
  }, []);

  const mainCall = useCallback(
    async function(...args: any[]) {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      loadDataFromCache();

      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      setIsLoading(true);

      try {
        const val = await asyncFunc(...args, {
          signal: abortController.signal,
        });
        if (val) {
          setState(val);
          onSuccess?.(val);
          setIsError(false);
          setIsSuccess(true);

          if (cacheKeyRef.current) {
            cache.current?.set(cacheKeyRef.current, val);
          }
        }
        setIsLoading(false);
        return val;
      } catch (error) {
        setIsLoading(false);
        if ((error as Error)?.name === 'AbortError') {
          // Request was aborted, do not process further
          return;
        }

        setIsSuccess(false);
        onError?.(error);
        setIsError(true);
        if (errorHandler) errorHandler(error);

        if (throwErrorRef.current) throw error;
      }
    },
    [asyncFunc, errorHandler, onError, onSuccess, loadDataFromCache]
  );

  useEffect(() => {
    if (runOnMount) {
      mainCall();
    }

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      setIsLoading(false);
      setIsError(false);
      setIsSuccess(false);
    };
  }, [asyncFunc, onError, mainCall, runOnMount]);

  const onRun: any = useCallback(
    function(...args: any[]) {
      // this will make the run function behave much like the normal behavior, because when you call an async funciton
      // it should throw when error.
      // i don't we might add a way to override it in the future.
      throwErrorRef.current = true;
      return mainCall(...args);
    },
    [mainCall]
  );

  return { run: onRun, val: state, isLoading, isError, isSuccess };
}

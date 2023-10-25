import { NoopFn, Nullable, PAwaited } from 'hd-utils';

export interface StableActions<T extends object> {
  set: <K extends keyof T>(key: K, value: T[K]) => void;
  setAll: (newMap: T) => void;
  remove: <K extends keyof T>(key: K) => void;
  reset: () => void;
}

export interface Actions<T extends object> extends StableActions<T> {
  get: <K extends keyof T>(key: K) => T[K];
}

export type UseIntersectionObserverParams = {
  element: Nullable<Element>;
  onInView?: (entry: IntersectionObserverEntry) => void;
  fallbackInView?: boolean;
  disabled?: boolean;
} & IntersectionObserverInit;
export type UseIntersectionObserverReturn = { isInView: boolean };

export type onError = (error: any) => void;

export type UseAsyncCallParam<T extends (...args: any) => any = any> = {
  asyncFunc: T;
  defaultValue?: PAwaited<ReturnType<T>>;
  throwError?: boolean;
  runOnMount?: boolean;
  runNow?: boolean;
  onSuccess?: (param: PAwaited<ReturnType<T>>) => void;
  onError?: onError;
  errorHandler?: (e: any) => void;
};

export type UseAsyncCallReturnType<T extends (...args: any) => any> = {
  run: T;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  val: PAwaited<ReturnType<T>> | undefined;
};

export type DebounceSettings = {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
} & { wait?: number };

export type UseInfiniteScrollParams = {
  isLoading?: boolean;
  disabled?: boolean;
  debounceSettings?: DebounceSettings & { wait?: number };
  hasMore: boolean;
  isError?: boolean;
  onLoadMore: NoopFn;
} & Pick<UseIntersectionObserverParams, 'element' | 'fallbackInView'>;

export type UseInfiniteScrollReturn = {
  shouldShowLoader: boolean;
};

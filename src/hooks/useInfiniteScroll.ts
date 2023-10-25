import { useEffect } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import useDebounce from './useDebounce';
import { UseInfiniteScrollParams, UseInfiniteScrollReturn } from '../types';

/**
 * @description a hook for infinite scroll, whenever divRef is on viewport it will call onLoadMore
 * @example
 * 
 *   const { shouldShowLoader } = useInfiniteScroll({
    element: divRef.current,
    isError,
    disabled,
    isLoading,
    hasMore,
    onLoadMore,
  });

   <div ref={divRef}>
        {shouldShowLoader && <p>Loading ...</p>}
      </div>

 */
export default function useInfiniteScroll({
  element,
  disabled,
  hasMore,
  fallbackInView,
  onLoadMore,
  isError,
  debounceSettings,
  isLoading,
}: UseInfiniteScrollParams): UseInfiniteScrollReturn {
  const runLoadMore = useDebounce(
    onLoadMore,
    debounceSettings?.wait,
    debounceSettings
  );
  const { isInView } = useIntersectionObserver({
    element,
    fallbackInView,
    disabled: isLoading || disabled || !hasMore || isError,
  });

  const shouldLoadMore =
    !isError && !disabled && !isLoading && hasMore && isInView;

  useEffect(() => {
    if (shouldLoadMore) {
      runLoadMore.run();
    } else {
      runLoadMore.cancel();
    }

    return () => {
      runLoadMore.cancel();
    };
  }, [shouldLoadMore, runLoadMore]);

  const shouldShowLoader = !(!hasMore || disabled);
  return { shouldShowLoader };
}

[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / useInfiniteScroll

# Function: useInfiniteScroll()

> **useInfiniteScroll**(`__namedParameters`): [`UseInfiniteScrollReturn`](../type-aliases/UseInfiniteScrollReturn.md)

## Parameters

• **\_\_namedParameters**: [`UseInfiniteScrollParams`](../type-aliases/UseInfiniteScrollParams.md)

## Returns

[`UseInfiniteScrollReturn`](../type-aliases/UseInfiniteScrollReturn.md)

## Description

a hook for infinite scroll, whenever divRef is on viewport it will call onLoadMore

## Example

```ts
const { shouldShowLoader } = useInfiniteScroll({
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
```

## Source

[src/hooks/useInfiniteScroll.ts:24](https://github.com/AhmadHddad/use-h-hooks/blob/1f1244a00bca3abea1e889f9fba7c9ad5d488039/src/hooks/useInfiniteScroll.ts#L24)

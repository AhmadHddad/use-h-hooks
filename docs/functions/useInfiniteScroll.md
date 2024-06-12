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

[src/hooks/useInfiniteScroll.ts:24](https://github.com/AhmadHddad/use-h-hooks/blob/daa6dd045ddcb2443f6d50fe7685055eb57611b7/src/hooks/useInfiniteScroll.ts#L24)

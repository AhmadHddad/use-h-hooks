[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / useIntersectionObserver

# Function: useIntersectionObserver()

> **useIntersectionObserver**(`__namedParameters`): [`UseIntersectionObserverReturn`](../type-aliases/UseIntersectionObserverReturn.md)

## Parameters

• **\_\_namedParameters**: [`UseIntersectionObserverParams`](../type-aliases/UseIntersectionObserverParams.md)

## Returns

[`UseIntersectionObserverReturn`](../type-aliases/UseIntersectionObserverReturn.md)

## Description

a hook that returns isInView when the passed element is in view

## Example

```ts
const { isInView } = useIntersectionObserver({
   element,
   disabled,
 });
```

## Source

[src/hooks/useIntersectionObserver.ts:15](https://github.com/AhmadHddad/use-h-hooks/blob/daa6dd045ddcb2443f6d50fe7685055eb57611b7/src/hooks/useIntersectionObserver.ts#L15)

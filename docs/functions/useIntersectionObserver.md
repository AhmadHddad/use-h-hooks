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

[src/hooks/useIntersectionObserver.ts:15](https://github.com/AhmadHddad/use-h-hooks/blob/ae314d2676b1b3964a4dad4fdc6b1f452e4b2293/src/hooks/useIntersectionObserver.ts#L15)

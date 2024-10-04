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

[src/hooks/useIntersectionObserver.ts:15](https://github.com/AhmadHddad/use-h-hooks/blob/1f1244a00bca3abea1e889f9fba7c9ad5d488039/src/hooks/useIntersectionObserver.ts#L15)

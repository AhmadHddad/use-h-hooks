[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / useToggle

# Function: useToggle()

> **useToggle**(`initialValue`?): [`boolean`, (`nextVal`?) => `void`]

## Parameters

• **initialValue?**: `boolean`

## Returns

[`boolean`, (`nextVal`?) => `void`]

## Description

useState but with toggle flags, when update is called will "toggle" the value

## Example

```ts
const [state, toggleState] = useToggle(false);
toggleState(); // you can either pass a boolean or nothing it will toggle the previous state
```

## Source

[src/hooks/useToggle.ts:9](https://github.com/AhmadHddad/use-h-hooks/blob/1f1244a00bca3abea1e889f9fba7c9ad5d488039/src/hooks/useToggle.ts#L9)

[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / useShowMoreText

# Function: useShowMoreText()

> **useShowMoreText**(`__namedParameters`): `ShowMoreReturnType`

## Parameters

• **\_\_namedParameters**: `ShowMoreTextParam`

## Returns

`ShowMoreReturnType`

## Description

will handle show more functionality (for local state not API).

## Example

```ts
const {textToDisplay,onShowMore } = useShowMoreText({text:"too long text"})
console.log(textToDisplay) // "too lon..."
onShowMore();
console.log(textToDisplay) // "too long text"
```

## Source

[src/hooks/useShowMoreText.ts:28](https://github.com/AhmadHddad/use-h-hooks/blob/daa6dd045ddcb2443f6d50fe7685055eb57611b7/src/hooks/useShowMoreText.ts#L28)

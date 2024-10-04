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

[src/hooks/useShowMoreText.ts:28](https://github.com/AhmadHddad/use-h-hooks/blob/1f1244a00bca3abea1e889f9fba7c9ad5d488039/src/hooks/useShowMoreText.ts#L28)

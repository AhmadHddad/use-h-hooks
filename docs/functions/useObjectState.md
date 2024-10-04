[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / useObjectState

# Function: useObjectState()

> **useObjectState**\<`S`\>(`initialState`): [`S`, `Dispatch`\<`SetStateAction`\<`S`\>\>]

## Type parameters

• **S** *extends* `Record`\<`string`, `any`\>

## Parameters

• **initialState**: `S`

## Returns

[`S`, `Dispatch`\<`SetStateAction`\<`S`\>\>]

## Description

React hook for state as object, when u call setState({a:2}) => will only update the key a with the value 2

## Example

```ts
const [state, setState] = useObjectState({a:1, b:2})
console.log(state.a) //1
setState({a:3})
setState(prev => ({...prev, a: prev.a + 3}))
```

## Source

[src/hooks/useObjectState.ts:11](https://github.com/AhmadHddad/use-h-hooks/blob/1f1244a00bca3abea1e889f9fba7c9ad5d488039/src/hooks/useObjectState.ts#L11)

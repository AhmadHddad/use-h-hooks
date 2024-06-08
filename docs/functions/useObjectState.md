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

[src/hooks/useObjectState.ts:11](https://github.com/AhmadHddad/use-h-hooks/blob/ae314d2676b1b3964a4dad4fdc6b1f452e4b2293/src/hooks/useObjectState.ts#L11)

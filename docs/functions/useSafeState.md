[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / useSafeState

# Function: useSafeState()

> **useSafeState**\<`T`\>(`val`): [`T`, `Dispatch`\<`SetStateAction`\<`T`\>\>]

## Type parameters

• **T**

## Parameters

• **val**: `T`

## Returns

[`T`, `Dispatch`\<`SetStateAction`\<`T`\>\>]

## Description

useSafeState will be update the value if its only not null or undefined, so unless there is a value it will update.

## Source

[src/hooks/useSafeState.ts:7](https://github.com/AhmadHddad/use-h-hooks/blob/1f1244a00bca3abea1e889f9fba7c9ad5d488039/src/hooks/useSafeState.ts#L7)

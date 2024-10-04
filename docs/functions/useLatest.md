[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / useLatest

# Function: useLatest()

> **useLatest**\<`T`\>(`value`): `MutableRefObject`\<`T`\>

## Type parameters

• **T**

## Parameters

• **value**: `T`

## Returns

`MutableRefObject`\<`T`\>

## Function

useLatest

## Description

React state hook that returns the latest state as described in the React hooks FAQ.
This is mostly useful to get access to the latest value of some props or state inside an asynchronous callback, instead of that value at the time the callback was created from

## Source

[src/hooks/useLatest.ts:10](https://github.com/AhmadHddad/use-h-hooks/blob/1f1244a00bca3abea1e889f9fba7c9ad5d488039/src/hooks/useLatest.ts#L10)

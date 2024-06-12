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

[src/hooks/useLatest.ts:10](https://github.com/AhmadHddad/use-h-hooks/blob/daa6dd045ddcb2443f6d50fe7685055eb57611b7/src/hooks/useLatest.ts#L10)

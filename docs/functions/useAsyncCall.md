[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / useAsyncCall

# Function: useAsyncCall()

> **useAsyncCall**\<`T`\>(`__namedParameters`): [`UseAsyncCallReturnType`](../type-aliases/UseAsyncCallReturnType.md)\<`T`\>

## Type parameters

• **T** *extends* `FunctionReturningPromise`

## Parameters

• **\_\_namedParameters**: [`UseAsyncCallParam`](../type-aliases/UseAsyncCallParam.md)\<`T`\>

## Returns

[`UseAsyncCallReturnType`](../type-aliases/UseAsyncCallReturnType.md)\<`T`\>

## Description

React hook for calling async functions calls will return the state isLoading, isError
it will run at first mount unless you define otherwise.

## Source

[src/hooks/useAsyncCall.ts:9](https://github.com/AhmadHddad/use-h-hooks/blob/1f1244a00bca3abea1e889f9fba7c9ad5d488039/src/hooks/useAsyncCall.ts#L9)

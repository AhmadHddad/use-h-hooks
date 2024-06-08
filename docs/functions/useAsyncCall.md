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

[src/hooks/useAsyncCall.ts:9](https://github.com/AhmadHddad/use-h-hooks/blob/ae314d2676b1b3964a4dad4fdc6b1f452e4b2293/src/hooks/useAsyncCall.ts#L9)

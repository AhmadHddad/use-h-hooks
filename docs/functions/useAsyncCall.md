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

[src/hooks/useAsyncCall.ts:9](https://github.com/AhmadHddad/use-h-hooks/blob/daa6dd045ddcb2443f6d50fe7685055eb57611b7/src/hooks/useAsyncCall.ts#L9)

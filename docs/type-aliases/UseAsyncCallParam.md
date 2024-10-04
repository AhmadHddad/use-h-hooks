[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / UseAsyncCallParam

# Type alias: UseAsyncCallParam\<T\>

> **UseAsyncCallParam**\<`T`\>: `object`

## Type parameters

• **T** *extends* (...`args`) => `any` = `any`

## Type declaration

### asyncFunc

> **asyncFunc**: `T`

### cacheKey?

> `optional` **cacheKey**: `string`

### defaultValue?

> `optional` **defaultValue**: `PAwaited`\<`ReturnType`\<`T`\>\>

### errorHandler()?

> `optional` **errorHandler**: (`e`) => `void`

#### Parameters

• **e**: `any`

#### Returns

`void`

### onError?

> `optional` **onError**: [`onError`](onError.md)

### onSuccess()?

> `optional` **onSuccess**: (`param`) => `void`

#### Parameters

• **param**: `PAwaited`\<`ReturnType`\<`T`\>\>

#### Returns

`void`

### runNow?

> `optional` **runNow**: `boolean`

### runOnMount?

> `optional` **runOnMount**: `boolean`

### throwError?

> `optional` **throwError**: `boolean`

## Source

[src/types.ts:24](https://github.com/AhmadHddad/use-h-hooks/blob/1f1244a00bca3abea1e889f9fba7c9ad5d488039/src/types.ts#L24)

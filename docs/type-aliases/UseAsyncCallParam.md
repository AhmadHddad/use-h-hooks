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

[src/types.ts:24](https://github.com/AhmadHddad/use-h-hooks/blob/ae314d2676b1b3964a4dad4fdc6b1f452e4b2293/src/types.ts#L24)

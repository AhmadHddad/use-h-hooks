[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / Actions

# Interface: Actions\<T\>

## Extends

- [`StableActions`](StableActions.md)\<`T`\>

## Type parameters

• **T** *extends* `object`

## Properties

### get()

> **get**: \<`K`\>(`key`) => `T`\[`K`\]

#### Type parameters

• **K** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **key**: `K`

#### Returns

`T`\[`K`\]

#### Source

[src/types.ts:11](https://github.com/AhmadHddad/use-h-hooks/blob/ae314d2676b1b3964a4dad4fdc6b1f452e4b2293/src/types.ts#L11)

***

### remove()

> **remove**: \<`K`\>(`key`) => `void`

#### Type parameters

• **K** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **key**: `K`

#### Returns

`void`

#### Inherited from

[`StableActions`](StableActions.md).[`remove`](StableActions.md#remove)

#### Source

[src/types.ts:6](https://github.com/AhmadHddad/use-h-hooks/blob/ae314d2676b1b3964a4dad4fdc6b1f452e4b2293/src/types.ts#L6)

***

### reset()

> **reset**: () => `void`

#### Returns

`void`

#### Inherited from

[`StableActions`](StableActions.md).[`reset`](StableActions.md#reset)

#### Source

[src/types.ts:7](https://github.com/AhmadHddad/use-h-hooks/blob/ae314d2676b1b3964a4dad4fdc6b1f452e4b2293/src/types.ts#L7)

***

### set()

> **set**: \<`K`\>(`key`, `value`) => `void`

#### Type parameters

• **K** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **key**: `K`

• **value**: `T`\[`K`\]

#### Returns

`void`

#### Inherited from

[`StableActions`](StableActions.md).[`set`](StableActions.md#set)

#### Source

[src/types.ts:4](https://github.com/AhmadHddad/use-h-hooks/blob/ae314d2676b1b3964a4dad4fdc6b1f452e4b2293/src/types.ts#L4)

***

### setAll()

> **setAll**: (`newMap`) => `void`

#### Parameters

• **newMap**: `T`

#### Returns

`void`

#### Inherited from

[`StableActions`](StableActions.md).[`setAll`](StableActions.md#setall)

#### Source

[src/types.ts:5](https://github.com/AhmadHddad/use-h-hooks/blob/ae314d2676b1b3964a4dad4fdc6b1f452e4b2293/src/types.ts#L5)

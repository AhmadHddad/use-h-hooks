[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / StableActions

# Interface: StableActions\<T\>

## Extended by

- [`Actions`](Actions.md)

## Type parameters

• **T** *extends* `object`

## Properties

### remove()

> **remove**: \<`K`\>(`key`) => `void`

#### Type parameters

• **K** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **key**: `K`

#### Returns

`void`

#### Source

[src/types.ts:6](https://github.com/AhmadHddad/use-h-hooks/blob/daa6dd045ddcb2443f6d50fe7685055eb57611b7/src/types.ts#L6)

***

### reset()

> **reset**: () => `void`

#### Returns

`void`

#### Source

[src/types.ts:7](https://github.com/AhmadHddad/use-h-hooks/blob/daa6dd045ddcb2443f6d50fe7685055eb57611b7/src/types.ts#L7)

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

#### Source

[src/types.ts:4](https://github.com/AhmadHddad/use-h-hooks/blob/daa6dd045ddcb2443f6d50fe7685055eb57611b7/src/types.ts#L4)

***

### setAll()

> **setAll**: (`newMap`) => `void`

#### Parameters

• **newMap**: `T`

#### Returns

`void`

#### Source

[src/types.ts:5](https://github.com/AhmadHddad/use-h-hooks/blob/daa6dd045ddcb2443f6d50fe7685055eb57611b7/src/types.ts#L5)

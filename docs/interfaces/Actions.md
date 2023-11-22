[use-h-hooks](../README.md) / [Exports](../modules.md) / Actions

# Interface: Actions<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

## Hierarchy

- [`StableActions`](StableActions.md)<`T`\>

  ↳ **`Actions`**

## Table of contents

### Properties

- [get](Actions.md#get)
- [remove](Actions.md#remove)
- [reset](Actions.md#reset)
- [set](Actions.md#set)
- [setAll](Actions.md#setall)

## Properties

### get

• **get**: <K\>(`key`: `K`) => `T`[`K`]

#### Type declaration

▸ <`K`\>(`key`): `T`[`K`]

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

##### Returns

`T`[`K`]

#### Defined in

[src/types.ts:11](https://github.com/AhmadHddad/use-h-hooks/blob/e0d1859/src/types.ts#L11)

___

### remove

• **remove**: <K\>(`key`: `K`) => `void`

#### Type declaration

▸ <`K`\>(`key`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

##### Returns

`void`

#### Inherited from

[StableActions](StableActions.md).[remove](StableActions.md#remove)

#### Defined in

[src/types.ts:6](https://github.com/AhmadHddad/use-h-hooks/blob/e0d1859/src/types.ts#L6)

___

### reset

• **reset**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[StableActions](StableActions.md).[reset](StableActions.md#reset)

#### Defined in

[src/types.ts:7](https://github.com/AhmadHddad/use-h-hooks/blob/e0d1859/src/types.ts#L7)

___

### set

• **set**: <K\>(`key`: `K`, `value`: `T`[`K`]) => `void`

#### Type declaration

▸ <`K`\>(`key`, `value`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `T`[`K`] |

##### Returns

`void`

#### Inherited from

[StableActions](StableActions.md).[set](StableActions.md#set)

#### Defined in

[src/types.ts:4](https://github.com/AhmadHddad/use-h-hooks/blob/e0d1859/src/types.ts#L4)

___

### setAll

• **setAll**: (`newMap`: `T`) => `void`

#### Type declaration

▸ (`newMap`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `newMap` | `T` |

##### Returns

`void`

#### Inherited from

[StableActions](StableActions.md).[setAll](StableActions.md#setall)

#### Defined in

[src/types.ts:5](https://github.com/AhmadHddad/use-h-hooks/blob/e0d1859/src/types.ts#L5)

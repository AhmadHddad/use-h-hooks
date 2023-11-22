[use-h-hooks](../README.md) / [Exports](../modules.md) / StableActions

# Interface: StableActions<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

## Hierarchy

- **`StableActions`**

  ↳ [`Actions`](Actions.md)

## Table of contents

### Properties

- [remove](StableActions.md#remove)
- [reset](StableActions.md#reset)
- [set](StableActions.md#set)
- [setAll](StableActions.md#setall)

## Properties

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

#### Defined in

[src/types.ts:6](https://github.com/AhmadHddad/use-h-hooks/blob/e0d1859/src/types.ts#L6)

___

### reset

• **reset**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

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

#### Defined in

[src/types.ts:5](https://github.com/AhmadHddad/use-h-hooks/blob/e0d1859/src/types.ts#L5)

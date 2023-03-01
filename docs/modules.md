[use-h-hooks](README.md) / Exports

# use-h-hooks

## Table of contents

### Functions

- [useAsyncCall](modules.md#useasynccall)
- [useEffectOnce](modules.md#useeffectonce)
- [useFirstMountState](modules.md#usefirstmountstate)
- [useLongPress](modules.md#uselongpress)
- [useMap](modules.md#usemap)
- [useObjectState](modules.md#useobjectstate)
- [useUpdate](modules.md#useupdate)
- [useUpdateEffect](modules.md#useupdateeffect)

## Functions

### useAsyncCall

▸ **useAsyncCall**<`T`\>(`«destructured»`): `UseAsyncCallReturnType`<`T`\>

**`Description`**

React hook for calling async functions calls will return the state isLoading, isError
it will run at first mount unless you define otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Value` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `UseAsyncCallParam`<`T`\> |

#### Returns

`UseAsyncCallReturnType`<`T`\>

#### Defined in

src/hooks/useAsyncCall.ts:39

___

### useEffectOnce

▸ **useEffectOnce**(`effect`): `void`

**`Description`**

will call the passed effect once per page mount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | `EffectCallback` |

#### Returns

`void`

#### Defined in

src/hooks/useEffectOnce.ts:7

___

### useFirstMountState

▸ **useFirstMountState**(): `boolean`

**`Description`**

React state hook that returns true if component is just mounted.

#### Returns

`boolean`

#### Defined in

src/hooks/useFirstMountState.ts:6

___

### useLongPress

▸ **useLongPress**(`callback`, `«destructured»?`): `Object`

**`Description`**

React sensor hook that fires a callback after long pressing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`e`: `TouchEvent` \| `MouseEvent`) => `void` |
| `«destructured»` | `Options` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `onMouseDown` | (`e`: `any`) => `void` |
| `onMouseLeave` | () => `void` |
| `onMouseUp` | () => `void` |
| `onTouchEnd` | () => `void` |
| `onTouchStart` | (`e`: `any`) => `void` |

#### Defined in

src/hooks/useLongPress.ts:24

___

### useMap

▸ **useMap**<`T`\>(`initialMap?`): [`T`, `Actions`<`T`\>]

**`Description`**

React state hook that tracks a value of an object.

**`Example`**

`
const Demo = () => {
 const [map, {set, setAll, remove, reset}] = useMap({
   hello: 'there',
 });

 return (
   <div>
     <button onClick={() => set(String(Date.now()), new Date().toJSON())}>
       Add
     </button>
     <button onClick={() => reset()}>
       Reset
     </button>
     <button onClick={() => setAll({ hello: 'new', data: 'data' })}>
       Set new data
     </button>
     <button onClick={() => remove('hello')} disabled={!map.hello}>
       Remove 'hello'
     </button>
     <pre>{JSON.stringify(map, null, 2)}</pre>
   </div>
 );
};`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialMap` | `T` |

#### Returns

[`T`, `Actions`<`T`\>]

#### Defined in

src/hooks/useMap.ts:41

___

### useObjectState

▸ **useObjectState**<`S`\>(`initialState`): [`S`, `Dispatch`<`SetStateAction`<`S`\>\>]

**`Description`**

React hook for state as object, when u call setState({a:2}) => will only update the key a with the value 2

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | `S` |

#### Returns

[`S`, `Dispatch`<`SetStateAction`<`S`\>\>]

#### Defined in

src/hooks/useObjectState.ts:6

___

### useUpdate

▸ **useUpdate**(): () => `void`

**`Description`**

React hook that when called will trigger rerender or update.

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

src/hooks/useUpdate.ts:9

___

### useUpdateEffect

▸ **useUpdateEffect**(`effect`, `deps?`): `void`

**`Description`**

React effect hook that ignores the first invocation (e.g. on mount). The signature is exactly the same as the useEffect hook.

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | `EffectCallback` |
| `deps?` | `DependencyList` |

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:1060

[use-h-hooks](README.md) / Exports

# use-h-hooks

## Table of contents

### References

- [useMountEffect](modules.md#usemounteffect)

### Interfaces

- [Actions](interfaces/Actions.md)
- [StableActions](interfaces/StableActions.md)

### Type Aliases

- [DebounceSettings](modules.md#debouncesettings)
- [UseAsyncCallParam](modules.md#useasynccallparam)
- [UseAsyncCallReturnType](modules.md#useasynccallreturntype)
- [UseInfiniteScrollParams](modules.md#useinfinitescrollparams)
- [UseInfiniteScrollReturn](modules.md#useinfinitescrollreturn)
- [UseIntersectionObserverParams](modules.md#useintersectionobserverparams)
- [UseIntersectionObserverReturn](modules.md#useintersectionobserverreturn)
- [onError](modules.md#onerror)

### Functions

- [useAsyncCall](modules.md#useasynccall)
- [useDebounce](modules.md#usedebounce)
- [useEffectOnce](modules.md#useeffectonce)
- [useFirstMountState](modules.md#usefirstmountstate)
- [useInfiniteScroll](modules.md#useinfinitescroll)
- [useIntersectionObserver](modules.md#useintersectionobserver)
- [useIsMounted](modules.md#useismounted)
- [useLatest](modules.md#uselatest)
- [useLongPress](modules.md#uselongpress)
- [useMap](modules.md#usemap)
- [useMountedState](modules.md#usemountedstate)
- [useObjectState](modules.md#useobjectstate)
- [usePrevious](modules.md#useprevious)
- [useShowMoreText](modules.md#useshowmoretext)
- [useToggle](modules.md#usetoggle)
- [useUnmount](modules.md#useunmount)
- [useUpdate](modules.md#useupdate)
- [useUpdateEffect](modules.md#useupdateeffect)
- [useValidatedImageURL](modules.md#usevalidatedimageurl)

## References

### useMountEffect

Renames and re-exports [useEffectOnce](modules.md#useeffectonce)

## Type Aliases

### DebounceSettings

Ƭ **DebounceSettings**: { `leading?`: `boolean` ; `maxWait?`: `number` ; `trailing?`: `boolean`  } & { `wait?`: `number`  }

#### Defined in

[src/types.ts:44](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/types.ts#L44)

___

### UseAsyncCallParam

Ƭ **UseAsyncCallParam**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` = `any` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asyncFunc` | `T` |
| `cacheKey?` | `string` |
| `defaultValue?` | `PAwaited`<`ReturnType`<`T`\>\> |
| `errorHandler?` | (`e`: `any`) => `void` |
| `onError?` | [`onError`](modules.md#onerror) |
| `onSuccess?` | (`param`: `PAwaited`<`ReturnType`<`T`\>\>) => `void` |
| `runNow?` | `boolean` |
| `runOnMount?` | `boolean` |
| `throwError?` | `boolean` |

#### Defined in

[src/types.ts:24](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/types.ts#L24)

___

### UseAsyncCallReturnType

Ƭ **UseAsyncCallReturnType**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isError` | `boolean` |
| `isLoading` | `boolean` |
| `isSuccess` | `boolean` |
| `run` | `T` |
| `val` | `PAwaited`<`ReturnType`<`T`\>\> \| `undefined` |

#### Defined in

[src/types.ts:36](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/types.ts#L36)

___

### UseInfiniteScrollParams

Ƭ **UseInfiniteScrollParams**: { `debounceSettings?`: [`DebounceSettings`](modules.md#debouncesettings) & { `wait?`: `number`  } ; `disabled?`: `boolean` ; `hasMore`: `boolean` ; `isError?`: `boolean` ; `isLoading?`: `boolean` ; `onLoadMore`: `NoopFn`  } & `Pick`<[`UseIntersectionObserverParams`](modules.md#useintersectionobserverparams), ``"element"`` \| ``"fallbackInView"``\>

#### Defined in

[src/types.ts:50](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/types.ts#L50)

___

### UseInfiniteScrollReturn

Ƭ **UseInfiniteScrollReturn**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `shouldShowLoader` | `boolean` |

#### Defined in

[src/types.ts:59](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/types.ts#L59)

___

### UseIntersectionObserverParams

Ƭ **UseIntersectionObserverParams**: { `disabled?`: `boolean` ; `element`: `Nullable`<`Element`\> ; `fallbackInView?`: `boolean` ; `onInView?`: (`entry`: `IntersectionObserverEntry`) => `void`  } & `IntersectionObserverInit`

#### Defined in

[src/types.ts:14](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/types.ts#L14)

___

### UseIntersectionObserverReturn

Ƭ **UseIntersectionObserverReturn**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isInView` | `boolean` |

#### Defined in

[src/types.ts:20](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/types.ts#L20)

___

### onError

Ƭ **onError**: (`error`: `any`) => `void`

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

##### Returns

`void`

#### Defined in

[src/types.ts:22](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/types.ts#L22)

## Functions

### useAsyncCall

▸ **useAsyncCall**<`T`\>(`«destructured»`): [`UseAsyncCallReturnType`](modules.md#useasynccallreturntype)<`T`\>

**`Description`**

React hook for calling async functions calls will return the state isLoading, isError
it will run at first mount unless you define otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `FunctionReturningPromise` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`UseAsyncCallParam`](modules.md#useasynccallparam)<`T`\> |

#### Returns

[`UseAsyncCallReturnType`](modules.md#useasynccallreturntype)<`T`\>

#### Defined in

[src/hooks/useAsyncCall.ts:9](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useAsyncCall.ts#L9)

___

### useDebounce

▸ **useDebounce**<`T`\>(`fn`, `wait?`, `options?`): `Object`

**`Description`**

React hooks that debounce function

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `T` | - |
| `wait?` | `number` | default is 200ms |
| `options?` | `DebounceOptions` | - |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cancel` | () => `void` |
| `flush` | () => `any` |
| `pending` | () => `boolean` |
| `run` | (...`args`: `any`[]) => `any` |
| `run.cancel` | () => `void` |
| `run.flush` | () => `any` |
| `run.pending` | () => `boolean` |

#### Defined in

[src/hooks/useDebounce.ts:10](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useDebounce.ts#L10)

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

[src/hooks/useEffectOnce.ts:7](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useEffectOnce.ts#L7)

___

### useFirstMountState

▸ **useFirstMountState**(): `boolean`

**`Description`**

React state hook that returns true if component is just mounted.

#### Returns

`boolean`

#### Defined in

[src/hooks/useFirstMountState.ts:6](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useFirstMountState.ts#L6)

___

### useInfiniteScroll

▸ **useInfiniteScroll**(`«destructured»`): [`UseInfiniteScrollReturn`](modules.md#useinfinitescrollreturn)

**`Description`**

a hook for infinite scroll, whenever divRef is on viewport it will call onLoadMore

**`Example`**

```ts
const { shouldShowLoader } = useInfiniteScroll({
   element: divRef.current,
   isError,
   disabled,
   isLoading,
   hasMore,
   onLoadMore,
 });

  <div ref={divRef}>
       {shouldShowLoader && <p>Loading ...</p>}
     </div>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`UseInfiniteScrollParams`](modules.md#useinfinitescrollparams) |

#### Returns

[`UseInfiniteScrollReturn`](modules.md#useinfinitescrollreturn)

#### Defined in

[src/hooks/useInfiniteScroll.ts:24](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useInfiniteScroll.ts#L24)

___

### useIntersectionObserver

▸ **useIntersectionObserver**(`«destructured»`): [`UseIntersectionObserverReturn`](modules.md#useintersectionobserverreturn)

**`Description`**

a hook that returns isInView when the passed element is in view

**`Example`**

```ts
const { isInView } = useIntersectionObserver({
   element,
   disabled,
 });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`UseIntersectionObserverParams`](modules.md#useintersectionobserverparams) |

#### Returns

[`UseIntersectionObserverReturn`](modules.md#useintersectionobserverreturn)

#### Defined in

[src/hooks/useIntersectionObserver.ts:15](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useIntersectionObserver.ts#L15)

___

### useIsMounted

▸ **useIsMounted**(): () => `boolean`

**`Description`**

will return a callback that returns true if the component is mounted

#### Returns

`fn`

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[src/hooks/useIsMounted.ts:6](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useIsMounted.ts#L6)

___

### useLatest

▸ **useLatest**<`T`\>(`value`): `MutableRefObject`<`T`\>

**`Function`**

useLatest

**`Description`**

React state hook that returns the latest state as described in the React hooks FAQ.
This is mostly useful to get access to the latest value of some props or state inside an asynchronous callback, instead of that value at the time the callback was created from

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`MutableRefObject`<`T`\>

#### Defined in

[src/hooks/useLatest.ts:10](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useLatest.ts#L10)

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

[src/hooks/useLongPress.ts:24](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useLongPress.ts#L24)

___

### useMap

▸ **useMap**<`T`\>(`initialMap?`): [`T`, [`Actions`](interfaces/Actions.md)<`T`\>]

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

[`T`, [`Actions`](interfaces/Actions.md)<`T`\>]

#### Defined in

[src/hooks/useMap.ts:32](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useMap.ts#L32)

___

### useMountedState

▸ **useMountedState**<`S`\>(`initialState?`): [`S`, `Dispatch`<`SetStateAction`<`S`\>\>]

**`Description`**

will set the state only when the component is mounted.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState?` | `S` |

#### Returns

[`S`, `Dispatch`<`SetStateAction`<`S`\>\>]

#### Defined in

[src/hooks/useMountedState.ts:7](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useMountedState.ts#L7)

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

[src/hooks/useObjectState.ts:7](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useObjectState.ts#L7)

___

### usePrevious

▸ **usePrevious**<`T`\>(`state`, `updateIfChanged?`): `T` \| `undefined`

**`Description`**

React state hook that returns the previous state as described in the React hooks FAQ

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `updateIfChanged?` | `boolean` |

#### Returns

`T` \| `undefined`

#### Defined in

[src/hooks/usePrevious.ts:6](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/usePrevious.ts#L6)

___

### useShowMoreText

▸ **useShowMoreText**(`«destructured»`): `ShowMoreReturnType`

**`Description`**

will handle show more functionality (for local state not API).

**`Example`**

```ts
const {textToDisplay,onShowMore } = useShowMoreText({text:"too long text"})
console.log(textToDisplay) // "too lon..."
onShowMore();
console.log(textToDisplay) // "too long text"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `ShowMoreTextParam` |

#### Returns

`ShowMoreReturnType`

#### Defined in

[src/hooks/useShowMoreText.ts:28](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useShowMoreText.ts#L28)

___

### useToggle

▸ **useToggle**(`initialValue?`): [`boolean`, (`nextVal?`: `boolean`) => `void`]

**`Description`**

useState but with toggle flags, when update is called will "toggle" the value

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue?` | `boolean` |

#### Returns

[`boolean`, (`nextVal?`: `boolean`) => `void`]

#### Defined in

[src/hooks/useToggle.ts:7](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useToggle.ts#L7)

___

### useUnmount

▸ **useUnmount**(`fn`): `void`

**`Description`**

React lifecycle hook that calls a function when the component will unmount

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` |

#### Returns

`void`

#### Defined in

[src/hooks/useUnmount.ts:9](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useUnmount.ts#L9)

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

[src/hooks/useUpdate.ts:9](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useUpdate.ts#L9)

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

___

### useValidatedImageURL

▸ **useValidatedImageURL**(`initialURL`, `fallbackURL`): (`string` \| `boolean`)[]

**`Description`**

Hook manages the state of an image URL in React. It validates the initial URL, falling back to an alternative URL if the initial one is invalid.

**`Example`**

```ts
function MyComponent() {
 const imageUrl = 'https://example.com/image.jpg';
 const fallbackUrl = 'https://example.com/fallback.jpg';

 const finalImageUrl = useValidatedImage(imageUrl, fallbackUrl);

 return (
   <div>
     <img src={finalImageUrl} alt="Loaded Image" />
   </div>
 );
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialURL` | `string` |
| `fallbackURL` | `string` |

#### Returns

(`string` \| `boolean`)[]

#### Defined in

[src/hooks/useValidatedImageURL.ts:20](https://github.com/AhmadHddad/use-h-hooks/blob/6862eb2/src/hooks/useValidatedImageURL.ts#L20)

[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / createGlobalStore

# Function: createGlobalStore()

> **createGlobalStore**\<`T`\>(`initState`, `storeConfigs`?): (`select`?, `hookConfigs`?) => `HookResult`\<`T`\>

## Type parameters

• **T** *extends* `Record`\<`string`, `unknown`\>

## Parameters

• **initState**: `T`= `undefined`

• **storeConfigs?**: `GlobalStoreConfig`

## Returns

`Function`

hook that is used to connect the component with the store.
its its really recommended to specify the used store keys in the returned hook (as list of strings) to reduce the component rerendering.

### Parameters

• **select?**: keyof `T`[]

• **hookConfigs?**: `HookConfigs`

### Returns

`HookResult`\<`T`\>

### getGlobalState()

#### Returns

`T`

### setGlobalState()

#### Parameters

• **newState**: `Partial`\<`T`\>

#### Returns

`void`

## Description

will create a global store where state is shared among components that use the returned hook
can persist data to the local storage and use query params as state

## Advanced

You can enter the global (store scope) state using useStore.getGlobalState() or set the global state useStore.setGlobalState

## Examples

```ts
export const useStore = createGlobalStore({a:1, b:2});
```

```ts
const Component = () => {
const [storeState, setStoreState] = useStore(["a"]);

return <button onClick={()=> setStoreState({a:3})}>Click me</button>
}
```

## Source

[src/creators/createGlobalStore.ts:61](https://github.com/AhmadHddad/use-h-hooks/blob/1f1244a00bca3abea1e889f9fba7c9ad5d488039/src/creators/createGlobalStore.ts#L61)

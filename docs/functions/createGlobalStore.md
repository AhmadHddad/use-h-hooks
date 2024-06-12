[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / createGlobalStore

# Function: createGlobalStore()

> **createGlobalStore**\<`T`\>(`initState`): (`select`?) => [`T`, (`s`) => `void`]

## Type parameters

• **T** *extends* `Record`\<`string`, `any`\>

## Parameters

• **initState**: `T`= `undefined`

## Returns

`Function`

hook that is used to connect the component with the store.
its its really recommended to specify the used store keys in the returned hook (as list of strings) to reduce the component rerendering.
 *

### Parameters

• **select?**: keyof `T`[]

### Returns

[`T`, (`s`) => `void`]

## Description

will create a global store where state is shared among components that use the returned hook

## Examples

```ts
export const useStore = createGlobalStore({a:1, b:2});
```

```ts
const Component = () =>{
const [storeState, setStoreState] = useStore(["a"]);

return <button onClick={()=> setStoreState({a:3})}>Click me</button>
}
```

## Source

src/creators/createGlobalStore.ts:15

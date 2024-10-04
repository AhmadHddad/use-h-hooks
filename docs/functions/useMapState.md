[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / useMapState

# Function: useMapState()

> **useMapState**\<`T`\>(`initialMap`): [`T`, [`Actions`](../interfaces/Actions.md)\<`T`\>]

## Type parameters

• **T** *extends* `object` = `any`

## Parameters

• **initialMap**: `T`= `undefined`

## Returns

[`T`, [`Actions`](../interfaces/Actions.md)\<`T`\>]

## Description

React state hook that tracks a value of an object.

## Example

```ts
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
```

## Source

[src/hooks/useMapState.ts:32](https://github.com/AhmadHddad/use-h-hooks/blob/1f1244a00bca3abea1e889f9fba7c9ad5d488039/src/hooks/useMapState.ts#L32)

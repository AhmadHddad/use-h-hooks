[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / useMap

# Function: useMap()

> **useMap**\<`T`\>(`initialMap`): [`T`, [`Actions`](../interfaces/Actions.md)\<`T`\>]

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

[src/hooks/useMap.ts:32](https://github.com/AhmadHddad/use-h-hooks/blob/daa6dd045ddcb2443f6d50fe7685055eb57611b7/src/hooks/useMap.ts#L32)

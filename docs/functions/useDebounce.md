[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / useDebounce

# Function: useDebounce()

> **useDebounce**\<`T`\>(`fn`, `wait`?, `options`?): `object`

## Type parameters

• **T** *extends* (...`args`) => `any`

## Parameters

• **fn**: `T`

• **wait?**: `number`

default is 200ms

• **options?**: `DebounceOptions`

## Returns

`object`

### cancel()

> **cancel**: () => `void` = `debounced.cancel`

#### Returns

`void`

### flush()

> **flush**: () => `any` = `debounced.flush`

#### Returns

`any`

### pending()

> **pending**: () => `boolean` = `debounced.pending`

#### Returns

`boolean`

### run()

> **run**: (...`args`) => `any` = `debounced`

#### Parameters

• ...**args**: `any`[]

#### Returns

`any`

### run.cancel()

> **cancel**: () => `void`

#### Returns

`void`

### run.flush()

> **flush**: () => `any`

#### Returns

`any`

### run.pending()

> **pending**: () => `boolean`

#### Returns

`boolean`

## Description

React hooks that debounce function

## Source

[src/hooks/useDebounce.ts:10](https://github.com/AhmadHddad/use-h-hooks/blob/daa6dd045ddcb2443f6d50fe7685055eb57611b7/src/hooks/useDebounce.ts#L10)

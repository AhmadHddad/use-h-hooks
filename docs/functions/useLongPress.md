[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / useLongPress

# Function: useLongPress()

> **useLongPress**(`callback`, `__namedParameters`): `object`

## Parameters

• **callback**

• **\_\_namedParameters**: `Options`= `{}`

## Returns

`object`

### onMouseDown()

> `readonly` **onMouseDown**: (`e`) => `void`

#### Parameters

• **e**: `any`

#### Returns

`void`

### onMouseLeave()

> `readonly` **onMouseLeave**: () => `void` = `clear`

#### Returns

`void`

### onMouseUp()

> `readonly` **onMouseUp**: () => `void` = `clear`

#### Returns

`void`

### onTouchEnd()

> `readonly` **onTouchEnd**: () => `void` = `clear`

#### Returns

`void`

### onTouchStart()

> `readonly` **onTouchStart**: (`e`) => `void`

#### Parameters

• **e**: `any`

#### Returns

`void`

## Description

React sensor hook that fires a callback after long pressing.

## Source

[src/hooks/useLongPress.ts:24](https://github.com/AhmadHddad/use-h-hooks/blob/1f1244a00bca3abea1e889f9fba7c9ad5d488039/src/hooks/useLongPress.ts#L24)

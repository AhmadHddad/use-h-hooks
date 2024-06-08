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

[src/hooks/useLongPress.ts:24](https://github.com/AhmadHddad/use-h-hooks/blob/ae314d2676b1b3964a4dad4fdc6b1f452e4b2293/src/hooks/useLongPress.ts#L24)

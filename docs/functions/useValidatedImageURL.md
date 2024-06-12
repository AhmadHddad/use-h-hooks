[**use-h-hooks**](../README.md) • **Docs**

***

[use-h-hooks](../globals.md) / useValidatedImageURL

# Function: useValidatedImageURL()

> **useValidatedImageURL**(`initialURL`, `fallbackURL`): [`string`, `boolean`]

## Parameters

• **initialURL**: `string`

• **fallbackURL**: `string`

## Returns

[`string`, `boolean`]

## Description

Hook manages the state of an image URL in React. It validates the initial URL, falling back to an alternative URL if the initial one is invalid.

## Example

```ts
function MyComponent() {
 const imageUrl = 'https://example.com/image.jpg';
 const fallbackUrl = 'https://example.com/fallback.jpg';

 const [finalImageUrl] = useValidatedImage(imageUrl, fallbackUrl);

 return (
   <div>
     <img src={finalImageUrl} alt="Loaded Image" />
   </div>
 );
}
```

## Source

[src/hooks/useValidatedImageURL.ts:20](https://github.com/AhmadHddad/use-h-hooks/blob/daa6dd045ddcb2443f6d50fe7685055eb57611b7/src/hooks/useValidatedImageURL.ts#L20)

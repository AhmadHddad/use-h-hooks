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

[src/hooks/useValidatedImageURL.ts:20](https://github.com/AhmadHddad/use-h-hooks/blob/ae314d2676b1b3964a4dad4fdc6b1f452e4b2293/src/hooks/useValidatedImageURL.ts#L20)

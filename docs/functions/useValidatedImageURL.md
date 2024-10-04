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

[src/hooks/useValidatedImageURL.ts:20](https://github.com/AhmadHddad/use-h-hooks/blob/1f1244a00bca3abea1e889f9fba7c9ad5d488039/src/hooks/useValidatedImageURL.ts#L20)

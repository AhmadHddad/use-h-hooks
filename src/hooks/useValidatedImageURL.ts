import { validateImageURLAsync } from 'hd-utils';
import { useEffect, useState } from 'react';

/**
 * @description Hook manages the state of an image URL in React. It validates the initial URL, falling back to an alternative URL if the initial one is invalid.
 * @example 
 * function MyComponent() {
  const imageUrl = 'https://example.com/image.jpg';
  const fallbackUrl = 'https://example.com/fallback.jpg';

  const finalImageUrl = useValidatedImage(imageUrl, fallbackUrl);

  return (
    <div>
      <img src={finalImageUrl} alt="Loaded Image" />
    </div>
  );
}
 */
export default function useValidatedImageURL(
  initialURL: string,
  fallbackURL: string
) {
  const [imageURL, setImageURL] = useState<string>(initialURL);
  const [isValidImg, setIsValidImg] = useState(false);

  useEffect(() => {
    async function loadImage() {
      const isValid = await validateImageURLAsync(initialURL);
      setIsValidImg(isValid);

      if (!isValid) {
        setImageURL(fallbackURL);
      }
    }

    loadImage();
  }, [initialURL, fallbackURL]);

  return [imageURL, isValidImg];
}

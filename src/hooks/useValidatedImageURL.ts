import { validateImageURLAsync } from 'hd-utils';
import { useEffect, useState } from 'react';

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

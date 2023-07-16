import { useEffect } from "react";
import { useFetchImageById } from "entities/Product";

import { IMG } from "./ProductImage.styled";

interface IProductImage {
  imageId: number;
}

export const ProductImage: React.FC<IProductImage> = ({ imageId }) => {
  const { imageUrl, handleFetchImage } = useFetchImageById();

  useEffect(() => {
    handleFetchImage(imageId);
  }, [handleFetchImage, imageId]);

  return (
    <li>
      <IMG src={imageUrl} alt="" />
    </li>
  );
};

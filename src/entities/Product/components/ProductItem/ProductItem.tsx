import { useState, useEffect } from "react";
import { fetchImage, IProduct } from "entities/Product";

import { Card, PrewImage } from "./ProductItem.styled";

interface IProductItem {
  product: IProduct;
}

export const ProductItem: React.FC<IProductItem> = ({ product }) => {
  const [img, setImg] = useState("");

  useEffect(() => {
    if (product.previewImageId) fetchImage(product.previewImageId, setImg);
  }, [product.previewImageId]);

  return (
    <Card>
      <span>{product.title}</span>
      <span>{product.quantity}</span>
      <span>{product.price}</span>
      {product.previewImageId && <PrewImage src={img} alt="" />}
    </Card>
  );
};

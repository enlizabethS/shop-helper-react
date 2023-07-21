import { useState, useEffect } from "react";
import { useFetchProductByIdQuery, fetchImage } from "entities/Product";

import { ImgBox, IMG } from "./ProductCard.styled";

interface IProductCard {
  productId: string;
}

export const ProductCard: React.FC<IProductCard> = ({ productId }) => {
  const { data: product } = useFetchProductByIdQuery(productId, {
    skip: productId === undefined,
  });
  const [image1, setImag1] = useState("");
  const [image2, setImag2] = useState("");
  const [image3, setImag3] = useState("");

  useEffect(() => {
    if (product === undefined) return;
    const { imagesId } = product;
    if (imagesId[0]) fetchImage(imagesId[0], setImag1);
    if (imagesId[1]) fetchImage(imagesId[1], setImag2);
    if (imagesId[2]) fetchImage(imagesId[2], setImag3);
  }, [product]);

  return (
    <>
      {product && (
        <>
          <ImgBox>
            {image1 && <IMG src={image1} alt="" />}
            {image2 && <IMG src={image2} alt="" />}
            {image3 && <IMG src={image3} alt="" />}
          </ImgBox>
          <div>{product.title}</div>
          <div>{product.quantity}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
        </>
      )}
    </>
  );
};

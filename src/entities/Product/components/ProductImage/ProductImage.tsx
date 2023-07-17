import { useEffect, useState } from "react";

import { IMG } from "./ProductImage.styled";

interface IProductImage {
  imageId: number;
}

export const ProductImage: React.FC<IProductImage> = ({ imageId }) => {
  return <li>{/* <IMG src={imageUrl} alt="" /> */}</li>;
};

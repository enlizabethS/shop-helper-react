import { ProductImage, IProduct } from "entities/Product";

import { Card } from "./ProductItem.styled";

interface IProductItem {
  product: IProduct;
}

export const ProductItem: React.FC<IProductItem> = ({ product }) => {
  return (
    <Card>
      <span>{product.title}</span>
      <span>{product.quantity}</span>
      <span>{product.price}</span>

      {product.imagesId && (
        <ul>
          {product.imagesId.map(id => (
            <ProductImage key={id} imageId={id} />
          ))}
        </ul>
      )}
    </Card>
  );
};

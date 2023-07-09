import { IProduct } from "entities/Product";
import { Card } from "./ProductCard.styled";

interface IProductCard {
  product: IProduct;
}

export const ProductCard: React.FC<IProductCard> = ({ product }) => {
  return (
    <Card>
      <span>{product.name}</span>
      <span>{product.quantity}</span>
      <span>{product.price}</span>
    </Card>
  );
};

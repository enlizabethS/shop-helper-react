import { ProductItem, IProduct } from "entities/Product";

import { ProductsList, ProductLink } from "./ProductsList.styled";

interface IProductsList {
  productsList: IProduct[];
}

export const ProductList: React.FC<IProductsList> = ({ productsList }) => {
  return (
    <ProductsList>
      {productsList.map(product => (
        <li key={product.id}>
          <ProductLink to={`/products/${product.id}`}>
            <ProductItem product={product} />
          </ProductLink>
        </li>
      ))}
    </ProductsList>
  );
};

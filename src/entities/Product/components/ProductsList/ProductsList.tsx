import { ProductItem, IProduct } from "entities/Product";
import { Spinner } from "shared";

import { ProductsList } from "./ProductsList.styled";

interface IProductsList {
  productsList: IProduct[];
  isLoading: boolean;
}

export const ProductList: React.FC<IProductsList> = ({
  productsList,
  isLoading,
}) => {
  return (
    <ProductsList>
      {isLoading ? (
        <Spinner />
      ) : productsList !== undefined && productsList.length > 0 ? (
        productsList.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : undefined}
    </ProductsList>
  );
};

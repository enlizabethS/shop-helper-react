import { useFetchProductCurrentUserQuery } from "entities/User";
import { Spinner } from "shared";

import { ProductsList, Card } from "./MyProducts.styled";

export const MyProducts: React.FC = () => {
  const { data: productsList, isLoading } =
    useFetchProductCurrentUserQuery(null);

  return (
    <ProductsList>
      {isLoading ? (
        <Spinner />
      ) : productsList !== undefined && productsList.length > 0 ? (
        productsList.map(product => (
          <Card key={product.id}>
            <span>{product.name}</span>
            <span>{product.quantity}</span>
            <span>{product.price}</span>
          </Card>
        ))
      ) : (
        "You have not added a product yet"
      )}
    </ProductsList>
  );
};

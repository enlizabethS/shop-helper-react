import { useEffect } from "react";
import { useFetchProductCurrentUserQuery, saveProducts } from "entities/User";
import { useAppDispatch, useAppSelector } from "shared";

import { ProductsList, Card } from "./MyProducts.styled";

export const MyProducts: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.users.products);
  const { data: productsList } = useFetchProductCurrentUserQuery(null);

  useEffect(() => {
    if (productsList !== undefined) {
      dispatch(saveProducts(productsList));
    }
  }, [dispatch, productsList]);

  return (
    <ProductsList>
      {products.map(product => (
        <Card key={product.id}>
          <span>{product.name}</span>
          <span>{product.quantity}</span>
          <span>{product.price}</span>
        </Card>
      ))}
    </ProductsList>
  );
};

import { useFetchProductCurrentUserQuery } from "entities/User";
import { ProductList } from "entities/Product";

const MyProductsPage: React.FC = () => {
  const { data: productsList, isLoading } =
    useFetchProductCurrentUserQuery(null);

  return (
    <>
      {productsList ? (
        <ProductList productsList={productsList} isLoading={isLoading} />
      ) : (
        "You have not added a product yet"
      )}
    </>
  );
};

export default MyProductsPage;

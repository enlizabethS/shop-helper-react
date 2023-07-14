import { useFetchProductsCurrentUserQuery } from "entities/Product";
import { ProductList } from "entities/Product";

const MyProductsPage: React.FC = () => {
  const { data: productsList, isLoading } =
    useFetchProductsCurrentUserQuery(null);

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

import { ProductList, IProduct } from "entities/Product";

const ProductPage: React.FC = () => {
  const productsList: IProduct[] = [];
  const isLoading = false;

  return <ProductList productsList={productsList} isLoading={isLoading} />;
};

export default ProductPage;

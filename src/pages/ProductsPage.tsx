import { ProductList } from "entities/Product";
import { useAppSelector } from "shared";

const ProductsPage: React.FC = () => {
  const productsList = useAppSelector(state => state.products.products);

  return <ProductList productsList={productsList} />;
};

export default ProductsPage;

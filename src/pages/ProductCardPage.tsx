import { useParams } from "react-router-dom";
import { ProductCard } from "entities/Product/components/ProductCard/ProductCard";

const ProductCardPage: React.FC = () => {
  const { productId } = useParams();

  return <>{productId && <ProductCard productId={productId} />}</>;
};

export default ProductCardPage;


import { ProductDetails } from "./ProductDetails";

export const Products = ({ addToCart }) => {
  return (
    <div className="container bg-light">
      <ProductDetails addToCart={addToCart} />
    </div>
  );
};

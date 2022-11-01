import { useContext } from "react";
import "./shop.styles.scss";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../Components/product-card/product-card.component";
const SHOP = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="products-container">
      {product.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default SHOP;

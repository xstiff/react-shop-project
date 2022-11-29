import "./category.styles.scss";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { getCategoriesMap } from "../../store/categories/categories.selector";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(getCategoriesMap);
    const products = categoriesMap[category];
    console.log("Render");
    return (
        <>
            <h1>{category.toUpperCase()}</h1>
            <div className="category-container">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </>
    );
};

export default Category;

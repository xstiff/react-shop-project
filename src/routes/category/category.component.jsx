import "./category.styles.scss";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { getCategoriesMap } from "../../store/categories/categories.selector";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(getCategoriesMap);
    const products = categoriesMap[category];
    // console.log("Render");
    const titltes = {
        hats: "hats",
        jackets: "jackets",
        sneakers: "sneakers",
        womens: "women's",
        mens: "men's",
    };
    return (
        <>
            <h1>{titltes[category].toUpperCase()}</h1>
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

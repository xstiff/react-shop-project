import "./category.styles.scss";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { getCategoriesMap } from "../../store/categories/categories.selector";
import { selectCategoriesIsLoading } from "../../store/categories/categories.selector";
import Spinner from "../../Components/Spinner/spinner.component";

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

    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <>
            <h1>{titltes[category].toUpperCase()}</h1>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="category-container">
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </div>
            )}
        </>
    );
};

export default Category;

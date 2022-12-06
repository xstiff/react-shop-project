import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading } from "../../store/categories/categories.selector";
import Spinner from "../Spinner/spinner.component";
const CategoryPreview = ({ title, products }) => {
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
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="category-preview-container">
                    <h2>
                        <Link to={`./${title}`}>
                            <span className="title">
                                {titltes[title].toUpperCase()}
                            </span>
                        </Link>
                    </h2>
                    <div className="preview">
                        {products
                            .filter((_, idx) => idx < 4)
                            .map((product) => {
                                return (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                );
                            })}
                    </div>
                </div>
            )}
        </>
    );
};

export default CategoryPreview;

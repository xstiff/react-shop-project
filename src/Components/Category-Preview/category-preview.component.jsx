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
        womens: "women",
        mens: "men",
    };

    const isLoading = useSelector(selectCategoriesIsLoading);

    const link =
        window.location.pathname === "/" ? `./shop/${title}` : `./${title}`;

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="category-preview-container">
                    <Link to={link}>
                        <h2>
                            <span className="title">
                                {titltes[title].toUpperCase()}
                            </span>
                            <span className="seemore">See more</span>
                        </h2>
                    </Link>

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

import { Fragment, useContext } from "react";
import "./shop.styles.scss";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../Components/product-card/product-card.component";
const SHOP = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => (
                <Fragment>
                    <h2>{title}</h2>
                    <div className="products-container">
                        {categoriesMap[title].map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </Fragment>
            ))}
        </Fragment>
    );
};

export default SHOP;

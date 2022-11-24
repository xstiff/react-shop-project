import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../Components/Category-Preview/category-preview.component";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    console.log(`CateogoryContext = `, categoriesMap);
    return (
        <div className="categories-preview-container">
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview
                        key={title}
                        title={title}
                        products={products}
                    />
                );
            })}
        </div>
    );
};

export default CategoriesPreview;

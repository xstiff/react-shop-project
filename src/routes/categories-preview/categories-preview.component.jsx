import { useSelector } from "react-redux";
import CategoryPreview from "../../Components/Category-Preview/category-preview.component";
import { getCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(getCategoriesMap);

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

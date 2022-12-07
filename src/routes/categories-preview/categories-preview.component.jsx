import { useSelector } from "react-redux";
import CategoryPreview from "../../Components/Category-Preview/category-preview.component";
import {
    getCategoriesMap,
    selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";
import Spinner from "../../Components/Spinner/spinner.component";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(getCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return isLoading ? (
        <Spinner />
    ) : (
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

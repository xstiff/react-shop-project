import "./shop.styles.scss";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import { Link } from "react-router-dom";
import Spinner from "../../Components/Spinner/spinner.component";
const SHOP = () => {
    const dispatch = useDispatch();
    const { categoriesMap } = useSelector((state) => state.categories);

    useEffect(() => {
        categoriesMap && dispatch(fetchCategoriesAsync());
    }, []);

    return (
        <Routes>
            <Route index element={<ShopRoute />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

const ShopRoute = () => {
    return (
        <>
            <span className="shop-path">
                <Link to="../../" className="pathing">
                    Home&nbsp;/&nbsp;
                </Link>
                Shop
            </span>
            <CategoriesPreview />
        </>
    );
};

export default SHOP;

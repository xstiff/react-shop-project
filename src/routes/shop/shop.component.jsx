import "./shop.styles.scss";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";

const SHOP = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default SHOP;

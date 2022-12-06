import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "@reduxjs/toolkit";
export const setCategoriesMap = (map) => {
    return createAction('SET_CATEGORIES_MAP', map)
};

export const FETCH_CATEGORIES_START = createAction("FETCH_CATEGORIES_START");
export const FETCH_CATEGORIES_ARRAY = createAction("FETCH_CATEGORIES_SUCCESS");
export const FETCH_CATEGORIES_ERROR = createAction("FETCH_CATEGORIES_FAILED");

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(FETCH_CATEGORIES_START());
    try {
        const categoriesArray = await getCategoriesAndDocuments("categories");
        dispatch(FETCH_CATEGORIES_ARRAY(categoriesArray));
    } catch (error) {
        dispatch(FETCH_CATEGORIES_ERROR(error));
    }
};

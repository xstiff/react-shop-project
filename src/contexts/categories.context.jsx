import { createContext, useEffect, useReducer } from "react";
import {
    getCategoriesAndDocuments,
    // addCollectionAndDocuments,
} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

const INITIAL_STATE = {
    categoriesMap: {},
};

const CategoryReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_CATEGORIES_MAP":
            return {
                ...state,
                categoriesMap: payload,
            };
        default:
            console.log(type);
            throw new Error("[CategoryReducer] Unknown type: ", type);
    }
};

export const CategoriesProvider = ({ children }) => {
    const [{ categoriesMap }, dispatch] = useReducer(
        CategoryReducer,
        INITIAL_STATE
    );
    const setCategoriesMap = (cMap) =>
        dispatch({ type: "SET_CATEGORIES_MAP", payload: cMap });

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};

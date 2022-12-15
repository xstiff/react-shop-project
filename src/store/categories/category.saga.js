import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
    FETCH_CATEGORIES_ARRAY, // success
    FETCH_CATEGORIES_ERROR,
    FETCH_CATEGORIES_START,
} from "./categories.action";

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(
            getCategoriesAndDocuments,
            "categories"
        );
        yield put(FETCH_CATEGORIES_ARRAY(categoriesArray));
    } catch (error) {
        yield put(FETCH_CATEGORIES_ERROR(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest("FETCH_CATEGORIES_START", fetchCategoriesAsync);
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}

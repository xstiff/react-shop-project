import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const loggerMiddleware = (store) => (next) => (action) => {
//     if (!action.type) {
//         return next(action);
//     }

//     console.log("type: ", action.type);
//     console.log("payload: ", action.payload);
//     console.log("current state: ", store.getState());

//     next(action);

//     console.log("next state: ", store.getState());
// };

const middleWares = [logger, sagaMiddleware];

export const store = configureStore({
    reducer: persistedReducer,
    middleware: middleWares,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

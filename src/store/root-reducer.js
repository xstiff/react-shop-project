import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { CategoryReducer } from "./categories/categories.reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    categories: CategoryReducer,
});

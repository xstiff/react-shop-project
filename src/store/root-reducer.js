import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { CategoryReducer } from "./categories/categories.reducer";
import { combineReducers } from "redux";
import { AlertReducer } from "./alert/alert.reducer";
export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    categories: CategoryReducer,
    alert: AlertReducer,
});

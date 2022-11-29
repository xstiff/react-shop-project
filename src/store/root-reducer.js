import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { CategoryReducer } from "./categories/categories.reducer";

export const rootReducer = {
    user: userReducer,
    cart: cartReducer,
    categories: CategoryReducer,
};

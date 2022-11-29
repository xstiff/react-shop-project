const CART_INITIAL_VALUE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    selectedRemove: {},
    confirmVisible: false,
};

export const cartReducer = (state = CART_INITIAL_VALUE, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_IS_CART_OPEN":
            return {
                ...state,
                isCartOpen: payload,
            };
        case "SET_SELECTED_REMOVE":
            return {
                ...state,
                selectedRemove: payload,
            };
        case "SET_CONFIRM_VISIBLE":
            return {
                ...state,
                confirmVisible: payload,
            };
        case "SET_CART_ITEMS":
            return {
                ...state,
                cartItems: payload,
            };
        case "SET_CART_COUNT":
            return {
                ...state,
                cartCount: payload,
            };
        case "SET_CART_TOTAL":
            return {
                ...state,
                cartTotal: payload,
            };

        default:
            return state;
    }
};

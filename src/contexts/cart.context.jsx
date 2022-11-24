import { useReducer } from "react";
import { createContext, useState, useEffect } from "react";
import cartItem from "../Components/Cart-item/cart-item.component";

const IdSearch = (cartItems, product) => {
    const doesExist = cartItems.find((x) => x.id == product.id);

    if (!doesExist) return [...cartItems, { ...product, quantity: 1 }];

    return cartItems.map((citem) =>
        citem.id == product.id
            ? { ...citem, quantity: citem.quantity + 1 }
            : citem
    );
};

const ReduceItems = (cartItems, product) => {
    const doesExist = cartItems.find((x) => x.id == product.id);

    if (!doesExist) return;

    return cartItems.map((citem) =>
        citem.id == product.id
            ? { ...citem, quantity: citem.quantity - 1 }
            : citem
    );
};

const IncreaseItem = (cartItems, product) => {
    const doesExist = cartItems.find((x) => x.id == product.id);

    if (!doesExist) return;
    return cartItems.map((citem) =>
        citem.id == product.id
            ? { ...citem, quantity: citem.quantity + 1 }
            : citem
    );
};

const CheckForZero = (cartItems) => {
    // console.log("checking for zero");
    let Filtered = cartItems;
    cartItems.map((x) => {
        if (x.quantity < 1) {
            Filtered = cartItems.filter((Item) => Item.id !== x.id);
        }
    });
    // console.log("IM HERE");
    return Filtered;
};

const RemoveSearch = (cartItems, product) => {
    const Filtered = cartItems.filter((x) => x.id !== product.id);
    return Filtered;
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItem: () => {},
    cartCount: 0,
    total: 0,
    cartPop: false,
    selectedRemove: {},
    confirmVisible: false,
    setconfirmVisible: () => {},
});

const cartReducer = (state, action) => {
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
            throw new Error("[CartReducer] Unhandled type: ", type);
    }
};

const CART_INITIAL_VALUE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    selectedRemove: {},
    confirmVisible: false,
};

export const CartProvider = ({ children }) => {
    // CART REDUCER
    const [
        {
            isCartOpen,
            cartItems,
            cartCount,
            cartTotal,
            selectedRemove,
            confirmVisible,
        },
        dispatch,
    ] = useReducer(cartReducer, CART_INITIAL_VALUE);

    const setIsCartOpen = (val) =>
        dispatch({ type: "SET_IS_CART_OPEN", payload: val });

    const setselectedRemove = (val) =>
        dispatch({ type: "SET_SELECTED_REMOVE", payload: val });

    const setconfirmVisible = (val) =>
        dispatch({ type: "SET_CONFIRM_VISIBLE", payload: val });

    const addItem = (val) => dispatch({ type: "SET_CART_ITEMS", payload: val });

    const setcartCount = (val) =>
        dispatch({ type: "SET_CART_COUNT", payload: val });

    const setcartTotal = (val) =>
        dispatch({ type: "SET_CART_TOTAL", payload: val });

    //END OF CART REDUCER

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, currentItem) => {
            return total + currentItem.quantity;
        }, 0);

        setcartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, currentItem) => {
            return total + currentItem.quantity * currentItem.price;
        }, 0);
        setcartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (product) => {
        return addItem(IdSearch(cartItems, product));
    };

    const ReduceAmount = (product) => {
        return addItem(ReduceItems(cartItems, product));
    };

    const IncreaseAmount = (product) => {
        return addItem(IncreaseItem(cartItems, product));
    };

    const RemoveProduct = (product) => {
        setconfirmVisible(true);
        setselectedRemove(product);
    };

    const ConfirmedRemove = (product) => {
        setconfirmVisible(false);
        return addItem(RemoveSearch(cartItems, product));
    };

    useEffect(() => {
        const newCart = CheckForZero(cartItems);
        return addItem(newCart);
    }, [cartItems]);

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        ConfirmedRemove,
        cartCount,
        ReduceAmount,
        RemoveProduct,
        IncreaseAmount,
        selectedRemove,
        confirmVisible,
        setconfirmVisible,
        cartTotal,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

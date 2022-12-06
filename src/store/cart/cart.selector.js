import { createAction } from "@reduxjs/toolkit";

export const setIsCartOpen = (boolean) =>
    createAction("SET_IS_CART_OPEN", boolean);

export const setselectedRemove = (val) =>
    createAction("SET_SELECTED_REMOVE", val);

export const setconfirmVisible = (val) =>
    createAction("SET_CONFIRM_VISIBLE", val);

export const addItem = (val) => createAction("SET_CART_ITEMS", val);

export const setcartCount = (val) => createAction("SET_CART_COUNT", val);

export const setcartTotal = (val) => createAction("SET_CART_TOTAL", val);

export const addItemToCart = (cartItems, product) =>
    addItem(IdSearch(cartItems, product));

export const ReduceAmount = (cartItems, product) =>
    addItem(ReduceItems(cartItems, product));

export const IncreaseAmount = (cartItems, product) =>
    addItem(IncreaseItem(cartItems, product));

export const RemoveProduct = (product) => [
    setselectedRemove(product),
    setconfirmVisible(true),
];

export const ConfirmedRemove = (cartItems, product) => [
    addItem(RemoveSearch(cartItems, product)),
    setconfirmVisible(false),
];

export const IdSearch = (cartItems, product) => {
    const doesExist = cartItems.find((x) => x.id === product.id);

    if (!doesExist) return [...cartItems, { ...product, quantity: 1 }];

    const res = cartItems.map((citem) =>
        citem.id === product.id
            ? { ...citem, quantity: citem.quantity + 1 }
            : citem
    );

    return res;
};

export const ReduceItems = (cartItems, product) => {
    const doesExist = cartItems.find((x) => x.id === product.id);

    if (!doesExist) return;

    return cartItems.map((citem) =>
        citem.id === product.id
            ? { ...citem, quantity: citem.quantity - 1 }
            : citem
    );
};

export const IncreaseItem = (cartItems, product) => {
    const doesExist = cartItems.find((x) => x.id === product.id);

    if (!doesExist) return;
    return cartItems.map((citem) =>
        citem.id === product.id
            ? { ...citem, quantity: citem.quantity + 1 }
            : citem
    );
};

export const CheckForZero = (cartItems) => {
    let Filtered = cartItems;
    cartItems.map((x) => {
        if (x.quantity < 1) {
            Filtered = cartItems.filter((item) => item.id !== x.id);
        }
        return Filtered;
    });
    return Filtered;
};

export const RemoveSearch = (cartItems, product) =>
    cartItems.filter((x) => x.id !== product.id);

import { createAction } from "@reduxjs/toolkit";

export const setIsCartOpen = createAction("SET_IS_CART_OPEN");

export const setselectedRemove = createAction("SET_SELECTED_REMOVE");

export const setconfirmVisible = createAction("SET_CONFIRM_VISIBLE");

export const addItem = createAction("SET_CART_ITEMS");

export const setcartCount = createAction("SET_CART_COUNT");

export const setcartTotal = createAction("SET_CART_TOTAL");

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

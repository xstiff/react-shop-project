import { useDispatch } from "react-redux";

export const setIsCartOpen = (boolean) => {
    return { type: "SET_IS_CART_OPEN", payload: boolean };
};

export const setselectedRemove = (val) => ({
    type: "SET_SELECTED_REMOVE",
    payload: val,
});

export const setconfirmVisible = (val) => ({
    type: "SET_CONFIRM_VISIBLE",
    payload: val,
});

export const addItem = (val) => ({ type: "SET_CART_ITEMS", payload: val });

export const setcartCount = (val) => ({ type: "SET_CART_COUNT", payload: val });

export const setcartTotal = (val) => ({ type: "SET_CART_TOTAL", payload: val });

export const addItemToCart = (cartItems, product) => {
    return addItem(IdSearch(cartItems, product));
};

export const ReduceAmount = (cartItems, product) => {
    return addItem(ReduceItems(cartItems, product));
};

export const IncreaseAmount = (cartItems, product) => {
    return addItem(IncreaseItem(cartItems, product));
};

export const RemoveProduct = (product) => {
    const dispatch = useDispatch();
    dispatch(setconfirmVisible(true));
    return setselectedRemove(product);
};

export const ConfirmedRemove = (cartItems, product) => {
    const dispatch = useDispatch();
    dispatch(setconfirmVisible(false));
    return addItem(RemoveSearch(cartItems, product));
};

export const IdSearch = (cartItems, product) => {
    console.log("cartItems = ", cartItems);
    console.log("product = ", product);
    const doesExist = cartItems.find((x) => x.id === product.id);

    if (!doesExist) return [...cartItems, { ...product, quantity: 1 }];

    const res = cartItems.map((citem) =>
        citem.id === product.id
            ? { ...citem, quantity: citem.quantity + 1 }
            : citem
    );
    console.log("RESPONSE: ", res);
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

export const RemoveSearch = (cartItems, product) => {
    const Filtered = cartItems.filter((x) => x.id !== product.id);
    return Filtered;
};

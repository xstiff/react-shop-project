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
    console.log("checking for zero");
    let Filtered = cartItems;
    cartItems.map((x) => {
        if (x.quantity < 1) {
            Filtered = cartItems.filter((Item) => Item.id !== x.id);
        }
    });
    console.log("IM HERE");
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
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, addItem] = useState([]);
    const [cartCount, setcartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, currentItem) => {
            return total + currentItem.quantity;
        }, 0);

        setcartCount(newCartCount);
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
        cartCount,
        ReduceAmount,
        RemoveProduct,
        IncreaseAmount,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

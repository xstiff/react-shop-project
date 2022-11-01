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
        addItem(IdSearch(cartItems, product));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

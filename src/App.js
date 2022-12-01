import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Nav from "./routes/navigation/navbar.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SHOP from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";
import {
    setcartTotal,
    setcartCount,
    addItem,
    CheckForZero,
} from "./store/cart/cart.selector";
import { useSelector } from "react-redux";
import { addItemToCart } from "./store/cart/cart.selector";
const App = () => {
    const dispatch = useDispatch();
    const cartSelector = useSelector((state) => state.cart);
    const cartItems = cartSelector.cartItems;

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            // console.log(user);
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, currentItem) => {
            return total + currentItem.quantity;
        }, 0);

        const newCartTotal = cartItems.reduce((total, currentItem) => {
            return total + currentItem.quantity * currentItem.price;
        }, 0);

        const newCart = CheckForZero(cartItems);
        // console.log("NEW CART: ", newCart);

        dispatch(setcartTotal(newCartTotal));
        dispatch(setcartCount(newCartCount));
        dispatch(addItem(newCart));
        // console.log("CART ITEMS: ", cartItems);
    }, [cartItems]);

    return (
        <Routes>
            <Route path="/" element={<Nav />}>
                <Route index element={<Home />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="shop/*" element={<SHOP />} />
                <Route path="checkout" element={<CheckOut />} />
            </Route>
        </Routes>
    );
};

export default App;

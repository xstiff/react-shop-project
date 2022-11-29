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
import { setCategoriesMap } from "./store/categories/categories.action";

import { getCategoriesAndDocuments } from "./utils/firebase/firebase.utils";
const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            dispatch(setCategoriesMap(categoryMap));
        };
        getCategoriesMap();
    }, []);

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

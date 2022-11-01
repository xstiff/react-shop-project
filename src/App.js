import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Nav from "./routes/navigation/navbar.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SHOP from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
//  < Outlet /> => Where to render the rest

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Nav />}>
                <Route index element={<Home />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="shop" element={<SHOP />} />
                <Route path="checkout" element={<CheckOut />} />
            </Route>
        </Routes>
    );
};

export default App;

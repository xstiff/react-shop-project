import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Nav from "./routes/navigation/navbar.component";
import SignIn from "./routes/sign-in/sign-in.component";

//  < Outlet /> => Where to render the rest

const Shop = () => {
  return <h1>Im shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;

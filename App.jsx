import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import UserForm from "./pages/UserForm";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <Router>
            <Routes>

                {/* ✅ Layout Routes */}
                <Route path="/" element={<Layout cartItems={cartItems} />}>
                    <Route index element={<Home />} />  {/* Home includes Carousel */}
                    <Route path="products" element={<Products addToCart={addToCart} />} />
                    <Route path="cart" element={<Cart cartItems={cartItems} />} />
                    <Route path="userform" element={<UserForm />} />
                </Route>

                {/* ✅ Outside Layout */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />

            </Routes>
        </Router>
    );
};

export default App;

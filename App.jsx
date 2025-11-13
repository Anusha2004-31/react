
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";  // ✅ added
import Home from "./pages/Home";
import { Products } from "./pages/Products";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserForm from "./pages/UserForm";

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <Router>
            <Header cartItems={cartItems} />

            <div style={{ marginTop: "80px" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/products"
                        element={<Products addToCart={addToCart} />}
                    />
                    <Route path="/cart" element={<Cart cartItems={cartItems} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/userform" element={<UserForm />} />
                </Routes>
            </div>

            <Footer />  {/* ✅ Footer always visible at bottom */}
        </Router>
    );
};

export default App;

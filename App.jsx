
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Products } from "./pages/Products";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
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
                    <Route path="/products" element={<Products addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>

            <Footer />
        </Router>
    );
}

export default App;

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import UserForm from "./pages/UserForm";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Routes>
 <Route path="/" element={<Layout cartItems={cartItems} />}>
          <Route index element={<Home />} />
          <Route
            path="products"
            element={<Products addToCart={addToCart} />}
          />
          <Route
            path="cart"
            element={<Cart cartItems={cartItems} />}
          />

          <Route path="userform" element={<UserForm />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;

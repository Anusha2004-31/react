// home page with toggle and banner
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import { Products } from "./pages/Products";
// import Cart from "./pages/Cart";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import { SingleProduct } from "./pages/SingleProduct";

// function App() {
//     const [cartItems, setCartItems] = useState([]);

//     const addToCart = (product) => {
//         setCartItems((prev) => [...prev, product]);
//     };
//     const [theme, setTheme] = useState(() => {
//         return localStorage.getItem("theme-mode") || "light";
//     });

//     useEffect(() => {
//         document.body.classList.remove("light", "dark");
//         document.body.classList.add(theme);
//         localStorage.setItem("theme-mode", theme);
//     }, [theme]);

//     const toggleTheme = () => {
//         setTheme((prev) => (prev === "light" ? "dark" : "light"));
//     };

//     return (
//         <Router>
//             <button
//                 onClick={toggleTheme}
//                 className="btn btn-outline-primary position-fixed top-0 end-0 m-3"
//                 style={{
//                     borderRadius: "50%",
//                     width: "45px",
//                     height: "45px",
//                     zIndex: 2000,
//                     fontSize: "18px",
//                 }}
//             >
//                 {theme === "light" ? "☀️" : "🌙"}
//             </button>

//             <Header cartItems={cartItems} />

//             <div style={{ marginTop: "80px" }}>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/products" element={<Products addToCart={addToCart} />} />
//                     <Route
//                         path="/product/:id"
//                         element={<SingleProduct addToCart={addToCart} />}
//                     />

//                     <Route path="/cart" element={<Cart cartItems={cartItems} />} />
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/dashboard" element={<Dashboard />} />
//                 </Routes>
//             </div>

//             <Footer />
//         </Router>
//     );
// }

// export default App;



// move cursor to see bubbools


// import { useRef, useEffect } from "react";

// export default function App() {
//     const containerRef = useRef(null);

//     useEffect(() => {
//         const container = containerRef.current;

//         const handleMove = (e) => {
//             const bubble = document.createElement("div");
//             bubble.className = "bubble";

//             bubble.style.left = `${e.clientX}px`;
//             bubble.style.top = `${e.clientY}px`;

//             container.appendChild(bubble);
//             setTimeout(() => bubble.remove(), 500);
//         };

//         container.addEventListener("mousemove", handleMove);
//         return () => {
//             container.removeEventListener("mousemove", handleMove);
//         };
//     }, []);

//     return (
//         <div ref={containerRef} className="container">
//             <h2>Move your cursor to see small bubbles</h2>
//         </div>
//     );
// }
// video play and pause

import React from "react";
import Player from "./Player";

function App() {
    return (
        <div>
            <Player />
        </div>
    );
}

export default App;

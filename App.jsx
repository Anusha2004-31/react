import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import Header from '../components/Header';
import '../App.css';
import { Parent } from './Parent';

export const App = () => {
  return (
    <>
      <Parent />
    </>
  );
};








// import './App.css'

// const App = () => {
//   return (
//     <>
//       <Header />  
      
//     </>
//   );
// };


// export default App;
// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [cards, setCards] = useState([]);
//   const [text, setText] = useState("");
//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("cards")) || [];
//     setCards(stored);
//   }, []);

//   const add = () => {
//     if (!text.trim()) return;
//     const updated = [...cards, text];
//     setCards(updated); 
//     setText("");
//   };

//   const del = (i) => {
//     const updated = cards.filter((_, index) => index !== i);
//     setCards(updated);
//   };
//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       localStorage.setItem("cards", JSON.stringify(cards));
//     };
//     window.addEventListener("beforeunload", handleBeforeUnload);
//     return () => window.removeEventListener("beforeunload", handleBeforeUnload);
//   }, [cards]);

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
//       }}
//     >
//       <div
//         style={{
//           background: "white",
//           padding: "25px",
//           borderRadius: "15px",
//           width: "350px",
//           boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
//           textAlign: "center",
//         }}
//       >
//         <h2 style={{ marginBottom: "15px" }}> GROCERY </h2>

//         <div style={{ display: "flex", marginBottom: "10px" }}>
//           <input
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="e.g. Banana..."
//             style={{
//               flex: 1,
//               padding: "8px",
//               borderRadius: "8px",
//               border: "1px solid #ccc",
//             }}
//           />
//           <button
//             onClick={add}
//             style={{
//               marginLeft: "6px",
//               padding: "8px 12px",
//               borderRadius: "8px",
//               background: "#007bff",
//               color: "white",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             search
//           </button>
//         </div>

//         <div>
//           {cards.length === 0 ? (
//             <p style={{ color: "#888" }}>No items yet </p>
//           ) : (
//             cards.map((c, i) => (
//               <div
//                 key={i}
//                 style={{
//                   background: "#f4f8ff",
//                   margin: "6px 0",
//                   padding: "8px",
//                   borderRadius: "8px",
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>{c}</span>
//                 <span
//                   onClick={() => del(i)}
//                   style={{ color: "red", cursor: "pointer" }}
//                 >
//                   🗑️
//                 </span>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// import'./App.css'

// export const app=()=>{
//   return(
//     <>
//     <Parent/>
//     </>
//   )
// }


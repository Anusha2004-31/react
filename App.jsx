
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import { Home } from "./Pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Carousel /> 
      <Home />     
      <Footer />
    </>
  );
};

export default App;

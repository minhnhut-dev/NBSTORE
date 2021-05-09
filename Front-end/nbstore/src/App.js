import "./App.css";
import React from "react";
import Header from "./Component/Header/Header";
import Banner from "./Component/Banner/Banner";
import Body from "./Component/Body/Body";
import Footer from "./Component/Footer/Footer";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Body />
      <Footer />
      {/* <ProductDetail/> */}
    </>
  );
}

export default App;

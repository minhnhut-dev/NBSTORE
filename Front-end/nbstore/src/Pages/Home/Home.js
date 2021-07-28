import {React ,useState,useEffect} from "react";
import Header from "../../Component/Header/Header";
import Banner from "../../Component/Banner/Banner";
import Body from "../../Component/Body/Body";
import Footer from "../../Component/Footer/Footer";
import ModalNews from "../../Component/ModalNews/ModalNews";

import "./Home.css";
function Home(props) {
  const {products,loading}=props;

  return (
    <>
      <ModalNews />
      <Header />
      <Banner />
      <Body products={products} loading={loading}/>
      <Footer />
    </>
  );
}

export default Home;

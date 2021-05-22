import React from "react";
import Header from "../../Component/Header/Header";
import Banner from "../../Component/Banner/Banner";
import Body from "../../Component/Body/Body";
import Footer from "../../Component/Footer/Footer";
function Home(props) {
  const {products}=props;
  return (
    <>
      <Header  />
      <Banner />
      <Body products={products}/>
      <Footer />
    </>
  );
}

export default Home;

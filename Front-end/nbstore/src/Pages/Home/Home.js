import React from "react";
import Header from "../../Component/Header/Header";
import Banner from "../../Component/Banner/Banner";
import Body from "../../Component/Body/Body";
import Footer from "../../Component/Footer/Footer";
function Home(props) {
  const {products,loading}=props;
  return (
    <>
      <Header />
      <Banner />
      <Body products={products} loading={loading}/>
      <Footer />
    </>
  );
}

export default Home;

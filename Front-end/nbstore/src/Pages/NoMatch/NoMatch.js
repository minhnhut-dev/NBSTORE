import React from "react";
import { useLocation } from "react-router";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";

function NoMatch() {
    const location=useLocation();
  return (
    <>
      <Header />
      <div className="noindex">
        <div className="clearfix" style={{marginLeft:"300px",marginTop:"20px"}}>
             <h1 className="title-register" >KHÔNG TÌM THẤY TRANG  {location.pathname}</h1>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </>
  );
}

export default NoMatch;

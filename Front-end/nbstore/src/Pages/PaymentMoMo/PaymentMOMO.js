import React, { useEffect, useState } from "react";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import axios from "axios";
function PaymentMoMo() {
  const orderInfo = JSON.parse(localStorage.getItem("Order") || "[]");
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  //localMessage
  //Thành công
  //Đơn hàng đã bị huỷ bỏ

  var query = useQuery();
  var name = query.get("localMessage");
  // if(name=="Thành công")
  // {
  //     localStorage.removeItem("Order");
  // }
  // else
  // {
  //   localStorage.removeItem("Order");
  // }
  useEffect(() => {
    const data = {
      trang_thai_don_hangs_id: 2,
    }
    if (name == "Thành công") {
      axios.put(`http://127.0.0.1:8000/api/updateOrder/${orderInfo.id}`,data)
        .then((res) => {
          console.log(res.data);
          localStorage.removeItem("Order");
        })
    }
    else {
      localStorage.removeItem("Order");
    }
  }, []);
  return (
    <>
      <Header />
      <div className="noindex">
        <div className="clearfix" >
          <h1 className="title-register" >{name} </h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default PaymentMoMo;

import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Paypal from "../../Component/Paypal/Paypal";

function User_infomartion() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin") || "[]");
  const [city, setCity] = useState([]);
  const [optionPayment, setOptionPayment] = useState();
  const [optionShipping, setOptionShipping] = useState(1);
  const [paypal, setPayPal] = useState(false);

  return (
    <>
      <Header />
      <div className="noindex">
        <div id="mainframe">
          <div className="container">
            <div className="cart-container">
              <h1 style={{ margin: 0 }}>Đặt hàng</h1>
              <div className="cart_step2">
                <div className="title_box_cart">1. Thông tin khách hàng</div>
                <div className="box-cart-user-info">
                  <input
                    name="name"
                    placeholder="Họ tên"
                    value={userLogin.TenNguoidung}
                  />
                  <input
                    name="name"
                    placeholder="Email"
                    value={userLogin.Email}
                  />
                  <input
                    name="name"
                    placeholder="Số điện thoại"
                    value={userLogin.SDT}
                  />
                  <input
                    name="name"
                    placeholder="Địa chỉ"
                    value={userLogin.DiaChi}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default User_infomartion;

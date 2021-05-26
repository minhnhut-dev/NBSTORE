import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import NumberFormat from "react-number-format";
import "./Cart.css";
function Cart(props) {
  // const [cartItem, SetCartItem] = useState([]);
  const [qty, SetQty] = useState(0);
  const { cartItems } = props;
  console.log("Cart item ở cart:", cartItems);
  const LinkImage = "http://127.0.0.1:8000/images/";
  return (
    <>
      <Header />
      <div className="noindex">
        <div id="mainframe">
          <div className="container">
            {cartItems.length === 0 ? (
              <div className="row">
                <div id="layout-page-first" className="col-md-12">
                  <span className="header-page clearfix">
                    <h1 className="title-cart"> Giỏ hàng</h1>
                  </span>
                  <p className="text-center">
                    Không có sản phẩm nào trong giỏ hàng!
                  </p>
                  <p className="text-center">
                    <Link to="/">
                      <i className="fas fa-backward"></i>
                      <span className="back-HomePage">Quay về trang chủ</span>
                    </Link>
                  </p>
                </div>
              </div>
            ) : (
              <div id="wrap-cart" className="container">
                <div className="row">
                  <div id="layout-page-card" className="container">
                    <span className="header-page clearfix">
                      <h1 className="title-card"> Giỏ hàng</h1>
                    </span>
                    <form id="cartformpage">
                      <table width="100%">
                        <thead>
                          <tr>
                            <th className="image">Sản phẩm</th>
                            <th className="item">Tên sản phẩm</th>
                            <th className="qty">Số lượng</th>
                            <th className="price">Giá tiền</th>
                            <th className="remove">Xóa</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item) => (
                            <tr>
                              <th className="image">
                                <div className="product_image">
                                  <Link to="#">
                                    <img
                                      src={LinkImage + item.AnhDaiDien}
                                      style={{ width: "100px" }}
                                    />
                                  </Link>
                                </div>
                              </th>
                              <th className="item">
                                <Link to="/ProductDetail">
                                  <strong>{item.TenSanPham}</strong>
                                </Link>
                              </th>
                              <th className="qty">
                                <input
                                  type="number"
                                  size="4"
                                  name="update[]"
                                  min="1"
                                  value="1"
                                />
                              </th>
                              <th className="price">
                                <NumberFormat
                                  value={item.GiaKM}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  suffix={" VNĐ"}
                                  renderText={(value, props) => (
                                    <div {...props}>{value} </div>
                                  )}
                                />
                              </th>
                              <th className="remove">
                                <i className="fas fa-trash-alt"></i>
                              </th>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;

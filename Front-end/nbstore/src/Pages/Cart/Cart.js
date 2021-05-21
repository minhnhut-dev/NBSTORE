import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import NumberFormat from "react-number-format";
import "./Cart.css";
function Cart() {
  const [emptyCart, SetEmptyCart] = useState(false);
  return (
    <>
      <Header />
      <div className="noindex">
        <div id="mainframe">
          <div className="container">
            {emptyCart === true ? (
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
                          <tr>
                            <th className="image">
                              <div className="product_image">
                                <Link to="#">
                                  <img src="//product.hstatic.net/1000026716/product/khunglaptopwebsite_a48c20bc37b74ba88aab4c7639fb97a9_small.jpg" />
                                </Link>
                              </div>
                            </th>
                            <th className="item">
                              <Link to="/ProductDetail">
                                <strong>
                                  Laptop gaming Acer Aspire 7 A715 41G R282
                                </strong>
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
                                value="22222222"
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <div {...props}>{value} </div>
                                )}
                              />
                            </th>
                            <th className="remove">
                              <i
                                className="fas fa-trash-alt"
                                onClick={() => SetEmptyCart(true)}
                              ></i>
                            </th>
                          </tr>
                          <tr>
                            <th className="image">
                              <div className="product_image">
                                <Link to="#">
                                  <img src="//product.hstatic.net/1000026716/product/khunglaptopwebsite_a48c20bc37b74ba88aab4c7639fb97a9_small.jpg" />
                                </Link>
                              </div>
                            </th>
                            <th className="item">
                              <Link to="/ProductDetail">
                                <strong>
                                  Laptop gaming Acer Aspire 7 A715 41G R282
                                </strong>
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
                                value="22222222"
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <div {...props}>{value} </div>
                                )}
                              />
                            </th>
                            <th className="remove">
                              <i
                                className="fas fa-trash-alt"
                                onClick={() => SetEmptyCart(true)}
                              ></i>
                            </th>
                          </tr>
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

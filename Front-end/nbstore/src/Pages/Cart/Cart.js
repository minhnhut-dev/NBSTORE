import React, { useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import NumberFormat from "react-number-format";
import { Button } from "react-bootstrap";
import "./Cart.css";
import axios from "axios";
function Cart(props) {
  const { cartItems, onRemove, onAdd } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.GiaKM, 0);
  const totalPrice = itemsPrice;
  const LinkImage = "http://127.0.0.1:8000/images/";
  const [city,setCity]=useState([]);
  const [optionPayment,setOptionPayment]=useState();
  useEffect(() => {
      axios.get('/city')
      .then((response) =>{
          setCity(response.data.LtsItem);
      })
  }, []);

  const newArr=cartItems.map(item=>{
    return {san_phams_id:item.id,DonGia:item.GiaKM,SoLuong:item.qty};
  });
  console.log("new Array :",newArr);
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
                    <div id="cartformpage">
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
                                <Link to={`/ProductDetail/${item.id}`}>
                                  <strong>{item.TenSanPham}</strong>
                                </Link>
                              </th>
                              <th
                                className="qty"
                                style={{
                                  display: "flex",
                                  marginTop: "30px",
                                  justifyContent: "space-evenly",
                                }}
                              >
                                <button
                                  onClick={() => onAdd(item)}
                                  className="add"
                                >
                                  +
                                </button>

                                <span className="cart-qty">{item.qty}</span>
                                <button
                                  onClick={() => onRemove(item)}
                                  className="remove"
                                >
                                  -
                                </button>
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
                                <i
                                  className="fas fa-trash-alt"
                                  onClick={() => onRemove(item)}
                                ></i>
                              </th>
                            </tr>
                          ))}
                          <tr className="summary">
                            <td
                              colSpan="4"
                              style={{ fontWeight: "bold", fontSize: "20px" }}
                            >
                              Tổng tiền
                            </td>
                            <td className="price">
                              <span className="total">
                                {/* <strong>{totalPrice}</strong> */}
                                <NumberFormat
                                  value={totalPrice}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  suffix={" VNĐ"}
                                  renderText={(value, props) => (
                                    <strong {...props}>{value} </strong>
                                  )}
                                />
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="cart-container">
                        <h1 style={{ margin: 0 }}>Đặt hàng</h1>
                        <div className="cart_step2">
                          <div className="title_box_cart">
                            1. Thông tin khách hàng
                          </div>
                          <div className="box-cart-user-info">
                            <input name="name" placeholder="Họ tên" />
                            <input name="name" placeholder="Email" />
                            <input name="name" placeholder="Số điện thoại" />
                            <select name="city">
                              <option value="0">Chọn tỉnh / Thành phố</option>
                              {city.map((item)=>(
                                <option value={item.ID}>{item.Title}</option>
                              ))}
                            </select>
                            <input name="name" placeholder="Địa chỉ" />
                          </div>
                          <div className="box-cart-user-info">
                            <div className="title_box_cart">
                              2. Hình thức thanh toán
                            </div>
                            <div
                              className="left"
                              style={{ marginRight: "15px" }}
                            >
                              <input name="Shipping" type="radio"  name="payment" value="1" onChange={e=>setOptionPayment(e.target.value)}/>
                              <label
                                style={{
                                  display: "inline-block",
                                  lineHeight: "20px",
                                  marginLeft: "15px",
                                }}
                              >
                                Giao hàng tận nơi
                              </label>
                            </div>
                            {/* <div id="orther-payment">
                              <span>HOẶC CHỌN THANH TOÁN ONLINE</span>
                            </div> */}
                            <div id="momo">
                              <input name="payment_momo" type="radio"name="payment" value="2" onChange={e=>setOptionPayment(e.target.value)}/>
                              <label
                                style={{
                                  display: "inline-block",
                                  lineHeight: "20px",
                                  marginLeft: "15px",
                                }}
                              >
                                <i class="cps-zalopay"></i>
                              <span>  Cổng thanh toán MOMO</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-md-12 cart-buttons inner-right inner-left">
                        <div className="buttons">
                          <Button id="checkout" name="checkout">
                            Thanh toán
                          </Button>
                        </div>
                      </div>
                    </div>
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

import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import NumberFormat from "react-number-format";
import { Button } from "react-bootstrap";
import "./Cart.css";
import axios from "axios";
import CryptoJS from "crypto-js";
import Paypal from "../../Component/Paypal/Paypal";
import { useSnackbar } from "notistack";

function Cart(props) {
  const userLogin = JSON.parse(localStorage.getItem("userLogin") || "[]");

  const { cartItems, onRemove, onAdd } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.GiaKM, 0);
  const totalPrice = itemsPrice;
  const LinkImage = "http://127.0.0.1:8000/images/";
  const [city, setCity] = useState([]);
  const [optionPayment, setOptionPayment] = useState();
  const [optionShipping, setOptionShipping] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [errorQty, setError] = useState("");
  const [errorPayment, setErrorPayment] = useState([]);
  const [errorShipping, setErrorShipping] = useState([]);
  const [errorLogin, setErrorLogin] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [payURL, setPayURL] = useState();
  const [paypal, setPayPal] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const newArr = cartItems.map((item) => {
    return { san_phams_id: item.id, DonGia: item.GiaKM, SoLuong: item.qty };
  });

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/getCity").then((response) => {
      console.log(response.data);
      setCity(response.data.LtsItem);
    });
  }, []);
  const handleOrder = async (e) => {
    e.preventDefault();
    const data = {
      nguoi_dungs_id: userLogin.id,
      hinh_thuc_thanh_toans_id: optionPayment,
      hinh_thuc_giao_hangs_id: optionShipping,
      trang_thai_don_hangs_id: 1,
      line_items: newArr,
    };

    if (!optionPayment || !optionShipping || userLogin.id == null) {
      axios
        .post("http://127.0.0.1:8000/api/order", data)
        .then((response) => {
          console.log(response.data);
          setOpen(true);
          setTimeout(() => {
            setRedirect(true);
          }, 2000);
        })
        .catch((err) => {
          console.log(err.response.data.error);
          setError(err.response.data.error);
          setErrorPayment(err.response.data.hinh_thuc_thanh_toans_id);
          setErrorShipping(err.response.data.hinh_thuc_giao_hangs_id);
          setErrorLogin(err.response.data.nguoi_dungs_id);

          if (err.response.data.hinh_thuc_giao_hangs_id != undefined) {
            enqueueSnackbar(err.response.data.hinh_thuc_giao_hangs_id, {
              variant: "error",
              autoHideDuration: 3000,
              preventDuplicate: true,
            });
          }

          if (err.response.data.nguoi_dungs_id != undefined) {
            enqueueSnackbar(err.response.data.nguoi_dungs_id, {
              variant: "error",
              autoHideDuration: 3000,
              preventDuplicate: true,
            });
          }

          if (err.response.data.hinh_thuc_thanh_toans_id != undefined) {
            enqueueSnackbar(err.response.data.hinh_thuc_thanh_toans_id, {
              variant: "error",
              autoHideDuration: 3000,
              preventDuplicate: true,
            });
          }
        });
    } else if (optionPayment == 1) {
      axios
        .post("http://127.0.0.1:8000/api/order", data)
        .then((response) => {
          console.log(response.data);
          enqueueSnackbar("Chúc mừng bạn đã đặt hàng thành công", {
            variant: "success",
            autoHideDuration: 3000,
            preventDuplicate: true,
          });
          setTimeout(() => {
            setRedirect(true);
            localStorage.removeItem("cartItems");
            window.location.reload();
          }, 2000);
        })
        .catch((err) => {
          console.log(err.response.data.error);
          setError(err.response.data.error);
          setErrorPayment(err.response.data.hinh_thuc_thanh_toans_id);
          setErrorShipping(err.response.data.hinh_thuc_giao_hangs_id);
          setErrorLogin(err.response.data.nguoi_dungs_id);
          if (err.response.data.error != undefined) {
            enqueueSnackbar(err.response.data.error, {
              variant: "error",
              autoHideDuration: 3000,
              preventDuplicate: true,
            });
          }
         
        });
    } else if (optionPayment == 2) {
      var dataMoMo = {
        accessKey: accessKey,
        partnerCode: partnerCode,
        requestType: requestType,
        notifyUrl: notifyUrl,
        returnUrl: returnUrl,
        orderId: orderId,
        amount: amount,
        orderInfo: orderInfo,
        requestId: requestId,
        extraData: extraData,
        signature: signature,
      };
      await axios.post(apiEndPoint, dataMoMo).then((response) => {
        if (response.data.errorCode == 0) {
          localStorage.removeItem("cartItems");
          setPayURL(response.data.payUrl);

          axios
            .post("http://127.0.0.1:8000/api/order", data)
            .then((response) => {
              console.log(response.data.order);
              localStorage.setItem(
                "Order",
                JSON.stringify(response.data.order)
              );
              setRedirect(true);
            })
            .catch((err) => {
              setRedirect(false);
              if (err.response.data.error !== undefined) {
                enqueueSnackbar(err.response.data.error, {
                  variant: "error",
                  autoHideDuration: 3000,
                  preventDuplicate: true,
                });
              }
            });
        } else {
          setRedirect(false);
          enqueueSnackbar(response.data.localMessage, {
            variant: "error",
            autoHideDuration: 3000,
            preventDuplicate: true,
          });
        }
      });
    } else if (optionPayment == 3) {
      axios
        .post("http://127.0.0.1:8000/api/order", data)
        .then((response) => {
          console.log(response.data.order);
          localStorage.setItem("Order", JSON.stringify(response.data.order));
          setPayPal(true);
        })
        .catch((err) => {
          setPayPal(false);
          if (err.response.data.error != undefined) {
            enqueueSnackbar(err.response.data.error, {
              variant: "error",
              autoHideDuration: 3000,
              preventDuplicate: true,
            });
          }
        });
      localStorage.removeItem("cartItems");
    } else if (optionPayment == 4) {
      await axios
        .post("http://127.0.0.1:8000/api/paymentVNPAY", data)
        .then((response) => {
          setPayURL(response.data.pay_url.data);
          localStorage.setItem("Order", JSON.stringify(response.data.Order));
          localStorage.removeItem("cartItems");
          setRedirect(true);
        })
        .catch((err) => {
          if (err.response.data.error != undefined) {
            enqueueSnackbar(err.response.data.error, {
              variant: "error",
              autoHideDuration: 3000,
              preventDuplicate: true,
            });
          }
        });
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  //Thanh toán tiền mặc
  if (redirect && optionPayment == 2) {
    // return window.location.assign(payURL);
    return window.location.replace(payURL);
    //  return window.location.href = payURL;
  } else if (redirect && optionPayment == 1) {
    return <Redirect to="/account-order" />;
  } else if (redirect && optionPayment == 4) {
    return window.location.replace(payURL);
  }

  // Thanh toán MOMO

  const randomId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  const GenerateID = () => {
    return (
      randomId() +
      randomId() +
      "-" +
      randomId() +
      "-" +
      randomId() +
      "-" +
      randomId() +
      "-" +
      randomId()
    );
  };
  const Moneyconversion = (totalPrice) => {
    var dola = totalPrice / 23000;
    return dola.toFixed(2).toString();
  };
  const apiEndPoint = "/transactionProcessor";
  var partnerCode = "MOMO6KRQ20210610";
  var accessKey = "MYc8b7Wo8858OGUg";
  var secretKey = "zG3fTEcy3voCjcyLAWr81b4mBcmYG8DD";
  var requestType = "captureMoMoWallet";
  var orderInfo = "Payment MOMO";
  var amount = totalPrice.toString();
  var orderId = "HD" + GenerateID();
  var returnUrl = "http://localhost:3000/resultOrder/";
  var notifyUrl = "http://localhost:3000/resultOrder/";
  var requestId = orderId;
  var extraData = "email=nhatminh785@gmail.com";
  var raw_signature =
    "partnerCode=" +
    partnerCode +
    "&accessKey=" +
    accessKey +
    "&requestId=" +
    requestId +
    "&amount=" +
    amount +
    "&orderId=" +
    orderId +
    "&orderInfo=" +
    orderInfo +
    "&returnUrl=" +
    returnUrl +
    "&notifyUrl=" +
    notifyUrl +
    "&extraData=" +
    extraData;

  var signature = CryptoJS.HmacSHA256(raw_signature, secretKey).toString(
    CryptoJS.enc.Hex
  );
  return (
    <>
      <Header />
      <div className="noindex">
        <div id="mainframe">
          <div className="container">
            {/* {error ? (
              <Alert severity="error" style={{ textAlign: "center" }}>
                {error}
              </Alert>
            ) : (
              ""
            )}
            {errorPayment &&
              errorPayment.map((item) => (
                <Alert severity="error" style={{ textAlign: "center" }}>
                  {item}
                </Alert>
              ))} */}

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
                                      alt={item.AnhDaiDien}
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
                                  onClick={() => onRemove(item)}
                                  className="remove"
                                >
                                  -
                                </button>
                                <span className="cart-qty">{item.qty}</span>

                                <button
                                  onClick={() => onAdd(item)}
                                  className="add"
                                >
                                  +
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
                            <select name="city">
                              <option value="0">Chọn tỉnh / Thành phố</option>
                              {city.map((item) => (
                                <option value={item.ID}>{item.Title}</option>
                              ))}
                            </select>
                            <input
                              name="name"
                              placeholder="Địa chỉ"
                              value={userLogin.DiaChi}
                            />
                          </div>
                          <div className="box-cart-user-info">
                            <div className="title_box_cart">
                              2. Hình thức thanh toán
                            </div>
                            <div
                              className="left"
                              style={{ marginRight: "15px" }}
                            >
                              <input
                                name="Cash"
                                type="radio"
                                name="payment"
                                value="1"
                                onChange={(e) =>
                                  setOptionPayment(e.target.value)
                                }
                              />
                              <label
                                style={{
                                  display: "inline-block",
                                  lineHeight: "20px",
                                  marginLeft: "15px",
                                }}
                              >
                                Tiền mặt
                              </label>
                            </div>

                            <div id="momo">
                              <input
                                name="payment_momo"
                                type="radio"
                                name="payment"
                                value="2"
                                onChange={(e) =>
                                  setOptionPayment(e.target.value)
                                }
                              />
                              <label
                                style={{
                                  display: "inline-block",
                                  lineHeight: "20px",
                                  marginLeft: "15px",
                                }}
                              >
                                <i className="cps-zalopay"></i>
                                <span> Cổng thanh toán MOMO</span>
                              </label>
                            </div>
                            <div id="paypal">
                              <input
                                name="payment_paypal"
                                type="radio"
                                name="payment"
                                value="3"
                                onChange={(e) =>
                                  setOptionPayment(e.target.value)
                                }
                              />
                              <label
                                style={{
                                  display: "inline-block",
                                  lineHeight: "20px",
                                  marginLeft: "15px",
                                }}
                              >
                                <i className="fab fa-cc-paypal"></i>
                                <span> Paypal</span>
                              </label>
                            </div>
                            <div id="vnpay">
                              <input
                                name="payment_vnpay"
                                type="radio"
                                name="payment"
                                value="4"
                                onChange={(e) =>
                                  setOptionPayment(e.target.value)
                                }
                              />
                              <label
                                style={{
                                  display: "inline-block",
                                  lineHeight: "20px",
                                  marginLeft: "15px",
                                }}
                              >
                                <i className="cs-vnpay"></i>
                                <span> Cổng thanh toán VNPAY</span>
                              </label>
                            </div>
                          </div>
                          <div className="box-cart-user-info">
                            <div className="title_box_cart">
                              3. Hình thức giao hàng
                            </div>
                            <div
                              className="left"
                              style={{ marginRight: "15px" }}
                            >
                              <input
                                name="Shipping"
                                type="radio"
                                value="1"
                                onChange={(e) =>
                                  setOptionShipping(e.target.value)
                                }
                                checked
                              />
                              <label
                                style={{
                                  display: "inline-block",
                                  lineHeight: "20px",
                                  marginLeft: "15px",
                                }}
                              >
                                COD
                              </label>
                            </div>
                          </div>
                          {paypal ? (
                            <Paypal
                              Moneyconversion={Moneyconversion(totalPrice)}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="col-xl-12 col-md-12 cart-buttons inner-right inner-left">
                        <div className="buttons">
                          <Button
                            id="checkout"
                            name="checkout"
                            type="submit"
                            onClick={handleOrder}
                          >
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

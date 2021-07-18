import React, { useState, useEffect } from "react";
import "../Css/Account.css";
import Header from "../../../Component/Header/Header";
import Footer from "../../../Component/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import NumberFormat from "react-number-format";
const userLogin = JSON.parse(localStorage.getItem("userLogin") || "[]");
function OrderCancel() {
  const [order, setOder] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/getOrderCanceled/${userLogin.id}`)
      .then((response) => {
        // console.log(response.data);
        setOder(response.data);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="noindex">
        <div className="container">
          <div className="bg-white" style={{ padding: "10px" }}>
            <div id="content">
              <table id="tb-account" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td id="account-left">
                      <dl>
                        <dt>Đơn hàng đặt mua</dt>
                        <dd>
                          <Link to="/account-order">ĐH chưa thanh toán</Link>
                        </dd>
                        <dd>
                          <Link to="/account-ordered"> Đơn hàng đã thanh toán</Link>
                        </dd>
                        <dd>
                          <Link to="/account-completeOrder"> Đơn hàng đã hoàn thành</Link>
                        </dd>
                        <dd>
                          <Link to="/account-orderCanceled"> Đơn hàng đã hủy</Link>
                        </dd>
                      </dl>
                      <dl>
                        <dt>Thông tin tài khoản</dt>
                        <dd>
                          <Link to="/updateUser">
                            Thông tin cá nhân
                          </Link>
                        </dd>
                        <dd>
                          <Link to="/updatePassword">Thay đổi mật khẩu</Link>
                        </dd>
                      </dl>
                    </td>
                    <td valign="top" className="tb-order">
                      <h3>Tất cả đơn hàng đã hủy</h3>
                      <tr>
                        <td>Mã đơn hàng</td>
                        <td>Ngày đặt</td>

                        <td>Vận chuyển</td>
                        <td>Thanh toán</td>
                        <td>Tổng tiền</td>
                        <td>Trạng thái</td>
                      </tr>
                      {order.length === 0 ? (
                        <p>Bạn chưa có đơn hàng nào !</p>
                      ) : (
                        order.map((item) => (
                          <tr className="odd cancelled_order">
                            <td>
                              <Link to={`/account/order/${item.id}`}>#HD{item.id}</Link>
                            </td>
                            <td>{item.ThoiGianMua}</td>
                            <td>{item.TenHinhThuc}</td>
                            <td>{item.TenThanhToan}</td>
                            <NumberFormat
                              value={item.Tongtien}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={" VNĐ"}
                              renderText={(value, props) => (
                                <td {...props}>{value}</td>
                              )}
                            />
                            <td>{item.TenTrangThai}</td>
                          </tr>
                        ))
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderCancel;

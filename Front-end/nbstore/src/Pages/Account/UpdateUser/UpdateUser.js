import React, { useState, useEffect } from "react";
import "../Css/Account.css";
import Header from "../../../Component/Header/Header";
import Footer from "../../../Component/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { TextField } from "@material-ui/core";
const userLogin = JSON.parse(localStorage.getItem("userLogin") || "[]");
function UpdateUser() {
  const [name, setName] = useState(userLogin.TenNguoidung);
  const [address, setAddress] = useState(userLogin.DiaChi);
  const [phone, setPhone] = useState(userLogin.SDT);
  const [notification, setNotification] = useState("");
  const [error_Phone, setErrPhone] = useState(false);
  const [error_Address, setErrAddress] = useState(false);

  const handUpdate = () => {
    const data = {
      name: name,
      DiaChi: address,
      SDT: phone,
    };
    axios
      .post(`http://127.0.0.1:8000/api/updateUser/${userLogin.id}`, data)
      .then((response) => {
        // setErrPhone(false);
        // setAddress(false);     
        setNotification(response.data.message);
        localStorage.setItem("userLogin", JSON.stringify(response.data.user));
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        console.log(err.response.data);
        if(err.response.data.SDT !== undefined) {
          setErrPhone(true);
        }
        if(err.response.data.DiaChi != undefined)
        {
          setErrAddress(true);
        }
      });
  };
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
                          <Link to="/account-ordered">
                            Đơn hàng đã thanh toán
                          </Link>
                        </dd>
                        <dd>
                          <Link to="/account-completeOrder">
                            Đơn hàng đã hoàn thành
                          </Link>
                        </dd>
                        <dd>
                          <Link to="/account-orderCanceled">
                            {" "}
                            Đơn hàng đã hủy
                          </Link>
                        </dd>
                      </dl>
                      <dl>
                        <dt>Thông tin tài khoản</dt>
                        <dd>
                          <Link to="/updateUser">Thông tin cá nhân</Link>
                        </dd>
                        <dd>
                          <Link to="/updatePassword">Thay đổi mật khẩu</Link>
                        </dd>
                      </dl>
                    </td>
                    <td valign="top" className="tb-order">
                      <h3>Thông tin tài khoản</h3>
                      <p style={{ color: "#1f4cb1" }}>
                        {notification ? <b>Thông báo: {notification}</b> : ""}
                      </p>
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fas fa-envelope"></i>
                        </span>

                        <TextField
                          id="outlined-basic-1"
                          variant="outlined"
                          name="email"
                          type="email"
                          disabled
                          value={userLogin.Email}
                        />
                      </div>
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fas fa-user-edit"></i>
                        </span>

                        <TextField
                          required
                          id="outlined-basic-2"
                          variant="outlined"
                          name="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fas fa-map-marker-alt"></i>
                        </span>
                        {error_Address ? (
                          <TextField
                            error
                            label="Vui lòng nhập địa chỉ cụ thể"
                            id="outlined-basic-3"
                            variant="outlined"
                            name="address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        ) : (
                          <TextField
                            id="outlined-basic-3"
                            variant="outlined"
                            name="address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        )}
                      </div>
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fas fa-phone"></i>
                        </span>
                        {error_Phone ? <TextField
                          error
                          label="Vui lòng nhập số điện thoại cụ thể"
                          id="outlined-basic-4"
                          variant="outlined"
                          name="phone"
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        /> :
                        <TextField
                          id="outlined-basic-4"
                          variant="outlined"
                          name="phone"
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        }
                        
                      </div>
                      <div>
                        <Button
                          variant="primary"
                          className="btn-updateUser"
                          onClick={handUpdate}
                        >
                          Thay đổi
                        </Button>
                      </div>
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

export default UpdateUser;

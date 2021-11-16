import React, { useState, useEffect, useRef } from "react";
import "../Css/Account.css";
import Header from "../../../Component/Header/Header";
import Footer from "../../../Component/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";

const userLogin = JSON.parse(localStorage.getItem("userLogin") || "[]");
function UpdatePassword() {
  const [passwordOld, setPasswordOld] = useState("");
  const [rePassword, setRepassword] = useState("");
  const [newPassword, setNewpassword] = useState("");
  const [notification, setNotification] = useState("");
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});
  const Password = useRef({});
  Password.current = watch("newPassword", "");
  const handleUpdatePassword = (e) => {
    const data = {
      oldPassword: e.old_password,
      password: e.newPassword,
    };
    axios
      .post(`http://127.0.0.1:8000/api/updatePassword/${userLogin.id}`, data)
      .then((response) => {
        setNotification(response.data.message);
        console.log(response.data);
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log(err.response.data.message);
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
                      <h3>Thay đổi mật khẩu</h3>
                      <p style={{ color: "#1f4cb1" }}>
                        {notification ? <b>Thông báo: {notification}</b> : ""}
                      </p>
                      <p style={{ color: "red" }}>
                        {error ? <b>Thông báo: {error}</b> : ""}
                      </p>
                      <div className="input-group-updatePassword">
                        <TextField
                          id="outlined-basic-1"
                          variant="outlined"
                          name="old_password"
                          type="password"
                          label="Nhập mật khẩu cũ"
                          {...register("old_password", { required: true})}
                        />
                          {errors?.old_password?.type === "required" && (
                          <p>Mật khẩu không được bỏ trống</p>)}
                      </div>
                      <div className="input-group-updatePassword">
                        <TextField
                          id="outlined-basic-2"
                          variant="outlined"
                          name="newPassword"
                          type="password"
                          label="Nhập mật khẩu mới"
                          {...register("newPassword", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/})}
                        />
                         {errors?.newPassword?.type === "required" && (
                           <p>Mật khẩu không được bỏ trống</p>)}
                           {errors?.newPassword?.type === "pattern" && (
                           <p>Mật khẩu có 8 ký tự và 1 ký tự hoa</p>)}
                      </div>
                      <div className="input-group-updatePassword">
                        <TextField
                          id="outlined-basic-3"
                          variant="outlined"
                          name="re_password"
                          type="password"
                          label="Nhập lại mật khẩu mới"
                          {...register("re_password", { validate: value => value === Password.current || "Mật khẩu không khớp"
                        })}
                        />
                        {errors.re_password && <p>{errors.re_password .message}</p>}

                      </div>

                      <div>
                        <Button
                          variant="primary"
                          className="btn-updateUser"
                          type="submit"
                          onClick={handleSubmit(handleUpdatePassword)}
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

export default UpdatePassword;

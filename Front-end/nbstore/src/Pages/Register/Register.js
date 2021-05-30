import React from "react";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
function Register() {
  const [username,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const [Email,setEmail]=useState("");
  const [nameUser,setNameUser]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("");
  const [sex,setSex]=useState("");
  const [redirect,setRedirect]=useState(false);
  const onSubmit = (e)=>{
    e.preventDefault();
    const data={
      Email:Email,
      username:username,
      password:password,
      TenNguoidung:nameUser,
      SDT:phone,
      DiaChi:address,
      GioiTinh:sex,
    }
    axios.post ('http://127.0.0.1:8000/api/Register',data)
    .then(()=>{
      setRedirect(true);
     
    })
    .catch((e)=>{
      console.log(e);
    })
   
    
  };
  if(redirect)
   {
     return <Redirect to="/Login"/>
   }
  return (
    
    <>
      <Header />
      <div className="noindex">
        <div id="layout-page-register" className="container">
          <span className="header-contact header-page clearfix">
            <h1 className="title-register">Tạo tài khoản</h1>
          </span>
          <div className="userbox">
            <form acceptCharset="UTF-8" id="create_customer" onSubmit={onSubmit} >
            <div id="userName" className="input-group">
                <span className="input-group-addon">
                  <i class="fas fa-file-signature"></i>
                </span>
                <input
                  type="text"
                  required
                  name="userName"
                  placeholder="Nhập tên tài khoản"
                  className="text form-control"
                  size="30"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div id="password" className="input-group">
                <span className="input-group-addon">
                  <i class="fas fa-key"></i>
                </span>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Nhập mật khẩu"
                  className="text form-control"
                  size="30"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div id="first_name" className="input-group">
                <span className="input-group-addon">
                  <i class="fa fa-user"></i>
                </span>
                <input
                  type="Email"
                  required
                  name="Email"
                  placeholder="Nhập email"
                  className="text form-control"
                  size="30"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div id="nameUser" className="input-group">
                <span className="input-group-addon">
                  <i class="fa fa-user"></i>
                </span>
                <input
                  type="text"
                  required
                  name="nameUser"
                  placeholder="Nhập tên người dùng"
                  className="text form-control"
                  size="30"
                  onChange={(e) => setNameUser(e.target.value)}
                />
              </div>
              <div id="SDT" className="input-group">
                <span className="input-group-addon">
                  <i class="fas fa-phone"></i>
                </span>
                <input
                  type="text"
                  required
                  name="Phone"
                  placeholder="Phone"
                  className="text form-control"
                  size="30"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div id="Address" className="input-group">
                <span className="input-group-addon">
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <input
                  type="text"
                  required
                  name="Address"
                  placeholder="Nhập địa chỉ"
                  className="text form-control"
                  size="30"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div id="imageUser" className="input-group">
                <span className="input-group-addon">
                  <i class="far fa-id-badge"></i>
                </span>
                <input
                  type="File"
                  required
                  name="imageUser"
                  placeholder="Chọn 1 ảnh"
                  className="text form-control"
                  size="30"
                />
              </div>
              <div id="Sex" className="input-group">
                <span className="input-group-addon">
                  <i class="fas fa-genderless"></i>
                </span>
                <select className="text form-control" name="Sex" required   onChange={(e) => setSex(e.target.value)}>
                  <option value="1">Nam</option>
                  <option value="0">Nữ</option>
                  <option value="-1">Khác</option>
                </select>
              </div>
             
           
              <div className="action_bottom d-flex" >
                <Button variant="primary" className="btnLogin" type="submit">
                  Đăng ký
                </Button>
                <Button variant="secondary" className="btnBack">
                      <Link to="/Login">Quay về</Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;

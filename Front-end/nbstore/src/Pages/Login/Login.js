import React, { useState } from "react";
import "./Login.css";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [userName,setUserName]=useState("");
  const [Password,setPassword]=useState("");
  console.log('Username: ',userName);
  console.log('Password: ',Password);
 
  const HandleSubmit=(e)=>{
      e.preventDefault();
      const data={
        username:userName,
        password: Password,
      }
      axios.post('http://127.0.0.1:8000/api/Login',data)
          .then((response)=>{
            localStorage.setItem('userLogin',JSON.stringify(response.data.data.user));
          })
  }
  return (
    <>
      <Header />
      <div className="noindex">
        <div id="layout-page-login" className="container">
          <div id="customer-login">
            <span className="header-contact header-page clearfix">
              <h1 id="title-login" >Đăng Nhập</h1>
            </span>
            <div id="login" className="userbox">
              <div className="accounttype">
                <h2 className="title"></h2>
              </div>
              <form onSubmit={HandleSubmit} >
                <div className="input-group">
                  <span className="input-group-addon">
                    <i class="fas fa-user-tie"></i>
                  </span>
                  <input
                    required
                    type="text"
                    name="username"
                    placeholder="Nhập tài khoản "
                    className="text form-control"
                    onChange={e=>setUserName(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <span className="input-group-addon">
                          <i class="fas fa-user-lock"></i>
                  </span>
                  <input
                    required
                    type="password"
                    name="username"
                    placeholder="Nhập mật khẩu "
                    className="text form-control"
                    onChange={e=>setPassword(e.target.value)}
                  />
                </div>
                <div className="action_bottom">
                  <Button variant="primary" className="btnLogin" type="submit">
                    Đăng nhập
                  </Button>
                </div>
                <div className="req_pass">
                  <a href="#">Quên mật khẩu? </a>
                  hoặc
                  {/* <a href="#" className="linkRegister">
                    Đăng ký
                  </a> */}
                  <Link className="linkRegister" to="/Register">Đăng ký</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;

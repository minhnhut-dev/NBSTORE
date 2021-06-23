import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import "./Login.css";
import LinearProgress from "@material-ui/core/LinearProgress";

function Login() {
  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");
  const [process, setProcess] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: userName,
      password: Password,
    };
    axios
      .post("http://127.0.0.1:8000/api/Login", data)
      .then((response) => {
        console.log(response.data.data.user.active);
        if (response.data.data.user.active === 1) {
          localStorage.setItem(
            "userLogin",
            JSON.stringify(response.data.data.user)
          );
          localStorage.setItem("accessToken", response.data.data.access_token);
          setProcess(true);
          setTimeout(() => {
            setRedirect(true);
            window.location.reload();
          }, 3000);
        } else {
          const message =
            "Tài khoản chưa được xác thực vui lòng liên hệ để xác thực !";
          setError(message);
        }
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          console.log(e.response.data.message); // some reason error message
          setError(e.response.data.message);
        }
      });
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      <div className="noindex">
        <div id="layout-page-login" className="container">
          {error && (
            <Alert severity="error" style={{ textAlign: "center" }}>
              {error}
            </Alert>
          )}
      

          <div id="customer-login">
            <span className="header-contact header-page clearfix">
              <h1 id="title-login">Đăng Nhập</h1>
            </span>
            <div id="login" className="userbox">
              <div className="accounttype">
                <h2 className="title"></h2>
              </div>

              <form onSubmit={onSubmit}>
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
                    onChange={(e) => setUserName(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="action_bottom">
                  <Button variant="primary" className="btnLogin" type="submit">
                    Đăng nhập
                  </Button>
                </div>
                {process ? <LinearProgress /> : ""}
                <div className="req_pass">
                  <Link to="/acount/resetPassword">Quên mật khẩu? </Link>
                  hoặc
                  
                  <Link className="linkRegister" to="/Register">
                    Đăng ký
                  </Link>
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

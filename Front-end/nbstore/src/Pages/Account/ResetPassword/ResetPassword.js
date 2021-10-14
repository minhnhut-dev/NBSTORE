import React, { useState } from "react";
import Header from "../../../Component/Header/Header";
import Footer from "../../../Component/Footer/Footer";
import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { useParams } from "react-router";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
function ResetPassword() {
  const [password, setPassword] = useState("");
  const [password_confirm, setPassword_confirm] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);
  const [redirect, setRedirect] = useState(false);
  let { token } = useParams();
  const handleResetPassword = () => {
    const data = {
      password: password,
    };

    if (password == password_confirm) {
      axios
        .post(
          `http://127.0.0.1:8000/api/user/reset-password-client/${token}`,
          data
        )
        .then((response) => {
          setOpen(true);
          setTimeout(() => {
             setRedirect(true);
          },3000)
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    } else {
      setError("Mật khẩu nhập lại không đúng !");
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  if(redirect)
  {
    return <Redirect to="/Login" />
  }
  return (
    <>
      <Header />
      <div className="noindex">
        {error ? (
          <Alert severity="error" style={{ textAlign: "center" }}>
            {error}
          </Alert>
        ) : (
          ""
        )}
        <div id="layout-page-login" className="container">
          <div id="customer-login">
            <span className="header-contact header-page clearfix">
              <h4 id="title-login" style={{ marginTop: "20px" }}>
                Khôi phục mật khẩu
              </h4>
            </span>
            <div id="login" className="userbox">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fas fa-key"></i>
                </span>

                <TextField
                  id="outlined-basic-1"
                  label="Nhập mật khẩu mới"
                  variant="outlined"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fas fa-lock"></i>
                </span>

                <TextField
                  id="outlined-basic"
                  label="Nhập lại mật khẩu"
                  variant="outlined"
                  name="password_repeat"
                  type="password"
                  onChange={(e) => setPassword_confirm(e.target.value)}
                />
              </div>

              <div className="action_bottom">
                <Button
                  variant="primary"
                  className="btnLogin"
                  type="submit"
                  onClick={handleResetPassword}
                >
                  Xác nhận
                </Button>
              </div>
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                
              >
                <Alert onClose={handleClose} severity="success">
                 Chúc mừng bạn đã đổi mật khẩu thành công!
                </Alert>
              
              </Snackbar>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResetPassword;

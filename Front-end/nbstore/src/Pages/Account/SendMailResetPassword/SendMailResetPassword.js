import React, { useState } from "react";
import Footer from "../../../Component/Footer/Footer";
import Header from "../../../Component/Header/Header";
import { Button } from "react-bootstrap";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

function SendMailResetPassword() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [mail, setMail] = useState("");
  const [process, setProcess] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSendMail = () => {
    var data = {
      Email: mail,
    };
    axios
      .post("http://127.0.0.1:8000/api/user/forgot-password/", data)
      .then((response) => {
        setMessage(response.data.message);
        setProcess(true);
        setTimeout(() => {
          setRedirect(true);
        }, 3000);
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  };
  if (redirect) {
    return <Redirect to="/Login" />;
  }
  return (
    <>
      <Header />
      <div className="noindex">
        <div id="layout-page-login" className="container">
          {message && (
            <Alert severity="success" style={{ textAlign: "center" }}>
              {message}
            </Alert>
          )}
          {error && (
            <Alert severity="error" style={{ textAlign: "center" }}>
              {error}
            </Alert>
          )}

          <div id="customer-login">
            <span className="header-contact header-page clearfix">
              <h4 id="title-login" style={{ marginTop: "20px" }}>
                Khôi phục mật khẩu
              </h4>
            </span>
            <div id="login" className="userbox">
              <div className="input-group">
                <span className="input-group-addon">
                  <i class="fas fa-user-tie"></i>
                </span>
                <input
                  required
                  type="email"
                  name="username"
                  placeholder="Nhập email"
                  className="text form-control"
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>

              <div className="action_bottom">
                <Button
                  variant="primary"
                  className="btnLogin"
                  type="submit"
                  onClick={handleSendMail}
                >
                  Gửi mã
                </Button>
              </div>
              {process ? <LinearProgress /> : ""}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SendMailResetPassword;

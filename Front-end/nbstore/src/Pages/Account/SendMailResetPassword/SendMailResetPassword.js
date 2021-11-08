import React, { useState } from "react";
import Footer from "../../../Component/Footer/Footer";
import Header from "../../../Component/Header/Header";
import { Button } from "react-bootstrap";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import {useSnackbar} from 'notistack';
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";

function SendMailResetPassword() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [mail, setMail] = useState("");
  const [process, setProcess] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleClose = () => {
    setOpen(false);
  };
  const handleSendMail = () => {
    var data = {
      Email: mail,
    };
    setOpen(true);

    axios
      .post("http://127.0.0.1:8000/api/user/forgot-password/", data)
      .then((response) => {
        setMessage(response.data.message);
        enqueueSnackbar(response.data.message, {
          variant: "success",
          autoHideDuration: 3000,
        });
        // setProcess(true);
        setTimeout(() => {
          setRedirect(true);
        }, 3000);
      })
      .catch((e) => {
        setError(e.response.data.message);
        setOpen(false);
        enqueueSnackbar(e.response.data.message, {
          variant: "error",
          autoHideDuration: 3000,
        });
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
                <Backdrop
                  open={open}
                  className="backdrop-mui"
                  onClick={handleClose}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              </div>

              {/* {process ? <LinearProgress /> : ""} */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SendMailResetPassword;

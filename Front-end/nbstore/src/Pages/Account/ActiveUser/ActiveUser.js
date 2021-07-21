import React, { useState } from "react";
import Header from "../../../Component/Header/Header";
import Footer from "../../../Component/Footer/Footer";
import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import {useSnackbar} from 'notistack';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
function ActiveUser() {
  const [Email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);
  const [redirect, setRedirect] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleResetPassword = () => {
    const data = {
    Email:Email,
    };

      axios
        .post(
          `http://127.0.0.1:8000/reActiveUser`,
          data
        )
        .then((response) => {
          setOpen(true);
          setTimeout(() => {
             setRedirect(true);
          },3000)
        })
        .catch((error) => {
          console.log(error.response);
        });
   
  };
  
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
              <h2 id="title-login" style={{ marginTop: "20px" }}>
                Kích hoạt tài khoản
              </h2>
            </span>
            <div id="login" className="userbox">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fas fa-key"></i>
                </span>

                <TextField
                  id="outlined-basic-1"
                  label="Nhập Email bản của bạn"
                  variant="outlined"
                  name="password"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
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
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ActiveUser;

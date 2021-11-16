import React, { useRef, useState } from "react";
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
import "../Css/Account.css";
import { useForm } from "react-hook-form";
function ResetPassword() {
  const [password, setPassword] = useState("");
  const [password_confirm, setPassword_confirm] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);
  const [redirect, setRedirect] = useState(false);
  let { token } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});
  const Password = useRef({});
  Password.current = watch("password", "");
  const handleResetPassword = (e) => {
    const data = {
      password: e.password,
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
          }, 3000);
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
            <form onSubmit={handleSubmit(handleResetPassword)}>
              <div id="login" className="userbox">
                <div className="input-group config_pass">
                  <TextField
                    id="outlined-basic-1"
                    label="Nhập mật khẩu mới"
                    variant="outlined"
                    name="password"
                    type="password"
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    })}
                  />
                  {errors?.password?.type === "required" && (
                    <p>Mật khẩu không được bỏ trống</p>
                  )}
                  {errors?.password?.type === "pattern" && (
                    <p>Mật khẩu có 8 ký tự và 1 ký tự hoa</p>
                  )}
                </div>
                <div className="input-group config_pass">
                  <TextField
                    id="outlined-basic"
                    label="Nhập lại mật khẩu"
                    variant="outlined"
                    name="password_repeat"
                    type="password"
                    {...register("password_repeat", {
                      validate: (value) =>
                        value === Password.current || "Mật khẩu không khớp",
                    })}
                  />
                  {errors.password_repeat && (
                    <p>{errors.password_repeat.message}</p>
                  )}
                </div>

                <div className="action_bottom config_pass">
                  <Button
                    variant="primary"
                    className="btnResetPass"
                    type="submit"
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
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResetPassword;

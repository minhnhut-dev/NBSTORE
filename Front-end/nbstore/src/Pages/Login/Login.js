import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import "./Login.css";
import { useSnackbar } from "notistack";
import LinearProgress from "@material-ui/core/LinearProgress";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@material-ui/icons";

function Login() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [active, setActive] = useState(false);
  const [error, setError] = useState("");
  const [process, setProcess] = useState(false);
  const [google, setGoogle] = useState({});
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    re_password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});

  const onLoginSusscess = (res) => {
    console.log("login success:", res.profileObj);
    const dataGoogle = {
      Email: res.profileObj.email,
      TenNguoidung: res.profileObj.name,
      Anh: res.profileObj.imageUrl,
    };
    axios
      .post("http://127.0.0.1:8000/api/checkLoginGoogle", dataGoogle)
      .then((res) => {
        if (res.data.User) {
          localStorage.setItem("userLogin", JSON.stringify(res.data.User));
          setRedirect(true);
          history.push("/");
        } else {
          localStorage.setItem("userLogin", JSON.stringify(res.data.Message));
          setRedirect(true);
          history.push("/");
        }
      });
  };
  const onLoginFail = (res) => {
    console.log("login fails:", res);
  };
  const onSubmit = (e) => {
    const data = {
      username: e.username,
      password: e.password,
    };
    console.log(data)
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
            "T??i kho???n ch??a ???????c x??c th???c vui l??ng ki???m tra l???i mail ";
          enqueueSnackbar(message, {
            variant: "warning",
            autoHideDuration: 3000,
          });
        }
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          console.log(e.response.data.message); // some reason error message
          // setError(e.response.data.message);
          enqueueSnackbar(e.response.data.message, {
            variant: "error",
            autoHideDuration: 3000,
          });
        }
      });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  if (redirect) {
    return <Redirect to="/" />;
  }
  // if(active)
  // {
  //   return <Redirect to="/account/activeUser"/>
  // }
  return (
    <>
      <Header />
      <div className="noindex">
        <div id="layout-page-login" className="container">
          <div id="customer-login">
            <span className="header-contact header-page clearfix">
              <h5 id="title-login">Ch??o m???ng b???n ?????n NBSTORE</h5>
            </span>
            <div id="login" className="userbox">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group username_login">
                  <TextField
                    id="outlined-basic-1"
                    variant="outlined"
                    type="text"
                    label="T??n t??i kho???n"
                    name="username"
                    {...register("username", {
                      required: true,
                    })}
                  />
                  {errors?.username?.type === "required" && (
                    <p>T??i kho???n kh??ng ???????c b??? tr???ng</p>
                  )}
                </div>

                <div className="input-group password_login">
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      M???t kh???u
                    </InputLabel>
                    <OutlinedInput
                      name="password"
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      {...register("password", { required: true })}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="M???t kh???u"
                    />
                    {errors?.password?.type === "required" && (
                      <p>M???t kh???u kh??ng ???????c b??? tr???ng</p>
                    )}
                  </FormControl>
                </div>

                <GoogleLogin
                  className="buttonGoogle"
                  clientId="1044195774340-85bluj7hjcahgqia4miacjnh6ivkv6gf.apps.googleusercontent.com"
                  buttonText="????ng nh???p v???i google"
                  onSuccess={onLoginSusscess}
                  onFailure={onLoginFail}
                  cookiePolicy={"single_host_origin"}
                />
                <div className="action_bottom">
                  <Button variant="primary" className="btnLogin" type="submit">
                    ????ng nh???p
                  </Button>
                </div>
                {process ? <LinearProgress /> : ""}
                <div className="req_pass">
                  <Link to="/acount/resetPassword">Qu??n m???t kh???u? </Link>
                  ho???c
                  <Link className="linkRegister" to="/Register">
                    ????ng k??
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

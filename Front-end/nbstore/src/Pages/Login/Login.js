import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import "./Login.css";
import {useSnackbar} from 'notistack';
import LinearProgress from "@material-ui/core/LinearProgress";
import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router-dom";

function Login() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [active,setActive]=useState(false);
  const [error, setError] = useState("");
  const [process, setProcess] = useState(false);
  const [google,setGoogle]=useState({});
  let history = useHistory();


const onLoginSusscess=(res)=>{
  console.log('login success:', res.profileObj);
  const Email={
    Email:res.profileObj.email
  }
  const dataGoogle={
    Email:res.profileObj.email,
    TenNguoidung:res.profileObj.name,
    Anh:res.profileObj.imageUrl,
  }
  axios.post('http://127.0.0.1:8000/api/checkLoginGoogle',dataGoogle)
  .then((res)=>{
      if(res.data.User)     
      {
        localStorage.setItem(
          "userLogin",
          JSON.stringify(res.data.User)
        );
        setRedirect(true);
        history.push('/');
      } 
      else
      {
        localStorage.setItem(
          "userLogin",
          JSON.stringify(res.data.Message)
        );
        setRedirect(true);
        history.push('/');
      }
      
  })

}
const onLoginFail=(res)=>{
  console.log('login fails:', res);
}
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
             
          const message ='Tài khoản chưa được xác thực vui lòng kiểm tra lại mail ';
            enqueueSnackbar(message,{
              variant: 'warning',
               autoHideDuration: 3000,
            });
        }
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          console.log(e.response.data.message); // some reason error message
          // setError(e.response.data.message);
          enqueueSnackbar(e.response.data.message,{
            variant: 'error',
             autoHideDuration: 3000,
          });
        }
      });
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
          {/* {error && (
            <Alert severity="error" style={{ textAlign: "center" }}>
              {error}
            </Alert>
          )} */}
      

          <div id="customer-login">
            <span className="header-contact header-page clearfix">
              <h5 id="title-login">Chào mừng bạn đến NBSTORE</h5>
            </span>
            <div id="login" className="userbox">

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
                <GoogleLogin
                className="buttonGoogle"
                  clientId="1044195774340-85bluj7hjcahgqia4miacjnh6ivkv6gf.apps.googleusercontent.com"
                  buttonText="Đăng nhập với google"
                  onSuccess={onLoginSusscess}
                  onFailure={onLoginFail}
                  cookiePolicy={'single_host_origin'}
                />
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



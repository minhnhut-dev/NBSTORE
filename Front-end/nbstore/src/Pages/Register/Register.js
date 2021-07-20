import React from "react";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import { Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {useSnackbar} from 'notistack';
import CircularProgress from '@material-ui/core/CircularProgress';

import Backdrop from '@material-ui/core/Backdrop';

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errorEmail, setErrorEmail] = useState([]);
  const [errorUsername, setErrorUsername] = useState([]);
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      Email: Email,
      username: username,
      password: password,
      TenNguoidung: nameUser,
      SDT: phone,
      DiaChi: address,
      GioiTinh: sex,
    };
    axios
      .post("http://127.0.0.1:8000/api/Register", data)
      .then((response) => {
        // setOpen(true);
        setOpen(true);
         setTimeout(() => {
          // enqueueSnackbar('Chúc mừng bạn đăng ký thành công !',{variant:"success"});
          enqueueSnackbar('Chúc mừng bạn đăng ký thành công !',{
            variant: 'success',
             autoHideDuration: 3000,
          });
            setRedirect(true);
         },4000)
      })
      .catch((e) => {
        console.log(e.response.data);
        setErrorEmail(e.response.data.Email);
        setErrorUsername(e.response.data.username);
       
      });
  };

    // errorEmail.map((emailError) => {
    //  return  enqueueSnackbar(emailError,{
    //     variant: 'error',
    //      autoHideDuration: 3000,
    //      preventDuplicate: true,
    //   });
    // })
  
    // errorUsername.map((usernameError) => {
    //   return  enqueueSnackbar(usernameError,{
    //      variant: 'error',
    //       autoHideDuration: 3000,
    //       preventDuplicate: true,
    //    });
    //  })
  // 
  

  const handleClose = () => {
    setOpen(false);
  };
  if(redirect)
  {
    return <Redirect to="/Login" />
  }
  return (
    <>
      <Header />
      <div className="noindex">
      {errorEmail &&
          errorEmail.map((emailError) => {
             enqueueSnackbar(emailError,{
              variant: 'error',
               autoHideDuration: 3000,
               preventDuplicate: true,
            });
          })} 
           {errorUsername &&
          errorUsername.map((emailUsername) => {
             enqueueSnackbar(emailUsername,{
              variant: 'error',
               autoHideDuration: 3000,
               preventDuplicate: true,
            });
          })}
        
    
        <div id="layout-page-register" className="container">
          <span className="header-contact header-page clearfix">
            <h1 className="title-register">Tạo tài khoản</h1>
          </span>
          <div className="userbox">
            <form
              acceptCharset="UTF-8"
              id="create_customer"
            >
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
              <div id="Sex" className="input-group">
                <span className="input-group-addon">
                  <i class="fas fa-genderless"></i>
                </span>
                <select
                  className="text form-control"
                  name="Sex"
                  required
                  onChange={(e) => setSex(e.target.value)}
                >
                  <option value="1">Nam</option>
                  <option value="0">Nữ</option>
                  <option value="-1">Khác</option>
                </select>
              </div>

              <div className="action_bottom d-flex">
                <Button variant="primary" className="btnLogin" type="submit" onClick={onSubmit}>
                  Đăng ký
                </Button>
               <Backdrop open={open} className="backdrop-mui" onClick={handleClose}>
                  <CircularProgress color="inherit" />
             </Backdrop>
                <Button variant="secondary" className="btnBack">
                  <Link to="/Login">Quay về</Link>
                </Button>
              </div>
              {/* <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                
              >
                <Alert onClose={handleClose} severity="success">
                 Chúc mừng bạn đã đăng ký thành công!
                </Alert>
              
              </Snackbar> */}
            
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;

import React from 'react';
import "./Login.css";
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import {Button} from 'react-bootstrap';
function Login() {
    return (
      <>
       <Header/>
       <div className="noindex">
            <div id="layout-page-login" className="container">
                   <div id="customer-login">
                       <span className="header-contact header-page clearfix">
                           <h1 id="title-login">Đăng Nhập</h1>
                       </span>
                       <div id="login" className="userbox">
                            <div className="accounttype">
                                    <h2 className="title"></h2>
                            </div>
                            <form >
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                    <input required type="text" name="username" placeholder="Nhập tài khoản " className="text form-control" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                    <input required type="text" name="username" placeholder="Nhập tài khoản " className="text form-control" />
                                </div>
                                <div className="action_bottom">
                                <Button variant="primary" className="btnLogin">Đăng nhập</Button>
                                </div>
                                <div className="req_pass">
                                    <a href="#">Quên mật khẩu?     </a>
                                             hoặc
                                    <a href="#" className="linkRegister">Đăng ký</a>
                                </div>
                            </form>
                       </div>
                     </div>         
            </div>
       </div>
       <Footer/>
      </>
    );
}

export default Login;
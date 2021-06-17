import React from 'react';
import Footer from '../../../Component/Footer/Footer';
import Header from '../../../Component/Header/Header';
import { Button } from "react-bootstrap";

function ResetPassword() {
    return (
        <>
            <Header />
            <div className="noindex">
                <div id="layout-page-login" className="container">


                    <div id="customer-login">
                        <span className="header-contact header-page clearfix">
                            <h1 id="title-login">Khôi phục mật khẩu</h1>
                        </span>
                        <div id="login" className="userbox">

                            <div className="accounttype">
                                <h2 className="title"></h2>
                            </div>
                            <form>

                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i class="fas fa-user-tie"></i>
                                    </span>
                                    <input
                                        required
                                        type="text"
                                        name="username"
                                        placeholder="Nhập email"
                                        className="text form-control" />
                                </div>

                                <div className="action_bottom">
                                    <Button variant="primary" className="btnLogin" type="submit">
                                        Gửi mã
                                    </Button>

                                </div>
                                {/* {process ? <LinearProgress /> :""} */}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default ResetPassword;

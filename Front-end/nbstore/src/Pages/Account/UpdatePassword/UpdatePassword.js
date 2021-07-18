import React, { useState, useEffect } from "react";
import "../Css/Account.css";
import Header from "../../../Component/Header/Header";
import Footer from "../../../Component/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { TextField } from "@material-ui/core";
const userLogin = JSON.parse(localStorage.getItem("userLogin") || "[]");
function UpdatePassword() {
    const [passwordOld,setPasswordOld]=useState("");
    const [rePassword,setRepassword]=useState("");
    const [newPassword,setNewpassword]=useState("");
    const [notification,setNotification]=useState("");
    const [error,setError]=useState("");
    const handleUpdatePassword =()=>{
        const data={
            oldPassword:passwordOld,
            password:newPassword
        }
        if(newPassword == rePassword )
        {
            axios.post(`http://127.0.0.1:8000/api/updatePassword/${userLogin.id}`,data)
            .then((response)=>{
                setNotification(response.data.message);
                console.log(response.data);
            })
            .catch((err)=>{
                setError(err.response.data.message);
                console.log(err.response.data.message);
            })
        }
        else
        {
            setError("Mật khẩu nhập lại không đúng");
        }
    }
  return (
    <>
      <Header />
      <div className="noindex">
        <div className="container">
          <div className="bg-white" style={{ padding: "10px" }}>
            <div id="content">
              <table id="tb-account" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td id="account-left">
                      <dl>
                        <dt>Đơn hàng đặt mua</dt>
                        <dd>
                          <Link to="/account-order">ĐH chưa thanh toán</Link>
                        </dd>
                        <dd>
                          <Link to="/account-ordered">
                            Đơn hàng đã thanh toán
                          </Link>
                        </dd>
                        <dd>
                          <Link to="/account-completeOrder">
                            Đơn hàng đã hoàn thành
                          </Link>
                        </dd>
                        <dd>
                        <Link to="/account-orderCanceled"> Đơn hàng đã hủy</Link>

                        </dd>
                      </dl>
                      <dl>
                        <dt>Thông tin tài khoản</dt>
                        <dd>
                          <Link to="/updateUser">Thông tin cá nhân</Link>
                        </dd>
                        <dd>
                          <Link to="/updatePassword">Thay đổi mật khẩu</Link>
                        </dd>
                      </dl>
                    </td>
                    <td valign="top" className="tb-order">
                      <h3>Thay đổi mật khẩu</h3>
                     <p style={{color:"#1f4cb1"}}>
                            
                            {notification ?<b>Thông báo: {notification}</b>:""}
                     </p>
                     <p style={{color:"red"}}>
                            
                            {error ?<b>Thông báo: {error}</b>:""}
                     </p>
                      <div className="input-group">
                        <span className="input-group-addon">
                        <i className="fas fa-key"></i>                    
                        </span>

                        <TextField
                          id="outlined-basic-1"
                          variant="outlined"
                          name="password"
                          type="password"
                          label="Nhập mật khẩu cũ"
                          onChange={(e)=>setPasswordOld(e.target.value)}
                        />
                      </div>
                      <div className="input-group">
                        <span className="input-group-addon">
                        <i className="fas fa-key"></i>                    
                       
                        </span>

                        <TextField
                          id="outlined-basic-2"
                          variant="outlined"
                          name="newPassword"
                          type="password"
                          label="Nhập mật khẩu mới"
                          onChange={(e)=>setNewpassword(e.target.value)}
                        />
                      </div>
                      <div className="input-group">
                        <span className="input-group-addon">
                        <i className="fas fa-key"></i>                    

                        </span>
                        <TextField
                          id="outlined-basic-3"
                          variant="outlined"
                          name="re-password"
                          type="password"
                          label="Nhập lại mật khẩu"
                          onChange={(e)=>setRepassword(e.target.value)}
                        />
                      </div>
                     
                      <div>
                        <Button variant="primary" className="btn-updateUser" onClick={handleUpdatePassword}>
                          Thay đổi
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UpdatePassword;

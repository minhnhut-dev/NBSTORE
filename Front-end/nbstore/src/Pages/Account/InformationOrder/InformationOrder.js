import React from "react";
import Footer from "../../../Component/Footer/Footer";
import Header from "../../../Component/Header/Header";
import "../Css/Account.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function InformationOrder() {
  return (
    <>
      <Header />
      <div className="noindex">
            <div id="layout-page-order" className="container">
                <div className="col-md-12 header-page">
                    <h1 className="title-order-date">
                    Đơn hàng: #1000132432, đặt lúc 
                    <span className="order_date">-2021-06-03</span>
                    </h1>
                    <div className="flash notice">
                        <h5 id="order_cancelled_title">Trình trạng đơn hàng: Hủy đơn hàng </h5>
                    </div>
                </div>
                <div className="col-xs-12">
                    <h4>
                        <Link to="/account-order" style={{marginLeft:"12px",fontSize:"18px"}}>Quay lại trang tài khoản</Link>
                    </h4>
                </div>
                <div className="col-md-12 content-page">
                   <table id="order_details">
                        <tbody>
                            <tr style={{height:"40px"}}>
                                    <th style={{width:"530px"}}>Sản phẩm</th>
                                    <th style={{width:"141px"}}>Giá</th>
                                    <th  style={{width:"112px"}}>Số lượng</th>
                                    <th  style={{width:"152px"}}>Tổng cộng</th>
                            </tr>
                            <tr style={{height:"40px"}}>
                                <td style={{width:"530px"}}> 
                                    <Link>Laptop gaming Acer Nitro 5 AN515 56 79U2 - Default Title</Link>
                                </td>
                                <td  style={{width:"141px"}}>24,490,000₫</td>
                                <td  style={{width:"112px"}}>2</td>
                                <td  style={{width:"152px"}}>24,490,000₫</td>
                            </tr>
                            <tr style={{height:"40px"}} className="order_summary">
                                <td colspan="3">
                                    <b>Phí giao hàng</b>
                                </td>
                                <td >
                                    <b>0 VNĐ</b>
                                </td>
                            </tr>
                            <tr style={{height:"40px"}} className="order_summary order_total">
                                <td colspan="3">
                                    <b>Tổng tiền</b>
                                </td>
                                <td >
                                    <b>24,490,000 VNĐ</b>
                                </td>
                            </tr>
                        </tbody>
                   </table>
                </div>
            </div>  
      </div>
      <Footer />
    </>
  );
}

export default InformationOrder;

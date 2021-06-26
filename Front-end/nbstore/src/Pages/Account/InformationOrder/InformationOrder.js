import React, { useEffect, useState } from "react";
import Footer from "../../../Component/Footer/Footer";
import Header from "../../../Component/Header/Header";
import "../Css/Account.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
function InformationOrder() {
    let { id } = useParams();
    const [orderDetails, setOrderDetails] = useState([]);
    const TotalPrice = orderDetails.reduce((a, c) => a + c.SoLuong * c.DonGia, 0);
  
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/getOrderDetails/${id}`)
            .then((response) => {
                setOrderDetails(response.data);
            });
    }, []);
    return (
        <>
            <Header />
            <div className="noindex">
                <div id="layout-page-order" className="container">
                    <div className="col-xs-12">
                        <h4>
                            <Link to="/account-order" style={{ marginLeft: "12px", fontSize: "18px" }}>Quay lại trang tài khoản</Link>
                        </h4>
                    </div>
                    <div className="col-md-12 content-page">
                        <table id="order_details">
                            <tbody>
                                <tr style={{ height: "40px" }}>
                                    <th style={{ width: "530px" }}>Sản phẩm</th>
                                    <th style={{ width: "141px" }}>Giá</th>
                                    <th style={{ width: "112px" }}>Số lượng</th>
                                    <th style={{ width: "152px" }}>Tổng cộng</th>
                                </tr>
                                {orderDetails.map((item) => (
                                    <tr style={{ height: "40px" }}>
                                        <td style={{ width: "530px" }}>
                                            <Link>{item.TenSanPham}</Link>
                                        </td>
                                        <td style={{ width: "141px" }}>{item.DonGia}</td>
                                        <td style={{ width: "112px" }}>{item.SoLuong}</td>
                                        <td style={{ width: "152px" }}>{item.Tongtien}</td>
                                    </tr>
                                ))}

                                <tr style={{ height: "40px" }} className="order_summary">
                                    <td colspan="3">
                                        <b>Phí giao hàng</b>
                                    </td>
                                    <td >
                                        <b>0 VNĐ</b>
                                    </td>
                                </tr>
                                <tr style={{ height: "40px" }} className="order_summary order_total">
                                    <td colspan="3">
                                        <b>Tổng tiền</b>
                                    </td>
                                    <td >
                                        <b>{TotalPrice}</b>
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

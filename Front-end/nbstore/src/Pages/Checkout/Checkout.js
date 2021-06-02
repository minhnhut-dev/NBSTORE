import React from "react";
import "./Checkout.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Checkout() {
  return (
    <>
      <div className="content">
        <div className="wrap">
          <div className="sidebar">
            <div className="sidebar-content">
              <div className="order-summary order-summary-is-collapsed">
                <h2 className="visually-hidden">Thông tin đơn hàng</h2>
                <div className="order-summary-sections">
                  <div className="order-summary-section order-summary-section-discount">
                    <table className="product-table">
                      <tbody>
                        <tr className="product">
                          <td className="product-image">
                            <div className="product-thumbnail">
                              <div className="product-thumbnail-wrapper">
                                <img
                                  src="//product.hstatic.net/1000026716/product/10291_a7f81fd9ad86400ab911290ef6e63c11_small.jpeg"
                                  alt="Ghế chơi game Warrior WGC102 Black"
                                />
                              </div>
                              <span className="product-thumbnail-quantity">
                                1
                              </span>
                            </div>
                          </td>
                          <td className="product-description">
                            <span className="product-description-name order-summary-emphasis">
                              Ghế chơi game Warrior WGC102 Black
                            </span>
                          </td>
                          <td className="product-price">
                            <span className="order-summary-emphasis">
                              2,450,000₫
                            </span>
                          </td>
                        </tr>
                        <tr className="product">
                          <td className="product-image">
                            <div className="product-thumbnail">
                              <div className="product-thumbnail-wrapper">
                                <img
                                  src="//product.hstatic.net/1000026716/product/10291_a7f81fd9ad86400ab911290ef6e63c11_small.jpeg"
                                  alt="Ghế chơi game Warrior WGC102 Black"
                                />
                              </div>
                              <span className="product-thumbnail-quantity">
                                1
                              </span>
                            </div>
                          </td>
                          <td className="product-description">
                            <span className="product-description-name order-summary-emphasis">
                              Ghế chơi game Warrior WGC102 Black
                            </span>
                          </td>
                          <td className="product-price">
                            <span className="order-summary-emphasis">
                              2,450,000₫
                            </span>
                          </td>
                        </tr>
                        <tr className="product">
                          <td className="product-image">
                            <div className="product-thumbnail">
                              <div className="product-thumbnail-wrapper">
                                <img
                                  src="//product.hstatic.net/1000026716/product/10291_a7f81fd9ad86400ab911290ef6e63c11_small.jpeg"
                                  alt="Ghế chơi game Warrior WGC102 Black"
                                />
                              </div>
                              <span className="product-thumbnail-quantity">
                                1
                              </span>
                            </div>
                          </td>
                          <td className="product-description">
                            <span className="product-description-name order-summary-emphasis">
                              Ghế chơi game Warrior WGC102 Black
                            </span>
                          </td>
                          <td className="product-price">
                            <span className="order-summary-emphasis">
                              2,450,000₫
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="order-summary-section order-summary-section-total-lines payment-lines">
                    <table className="total-line-table">
                      <tbody>
                        <tr className="total-line total-line-subtotal">
                          <td className="total-line-name">Tạm tính</td>
                          <td className="total-line-price">
                            <span
                              className="order-summary-emphasis"
                              style={{ marginLeft: "240px" }}
                            >
                              1,190,000₫
                            </span>
                          </td>
                        </tr>
                        <tr className="total-line total-line-shipping">
                          <td className="total-line-name">Phí vận chuyển</td>
                          <td className="total-line-price">
                            <span
                              className="order-summary-emphasis"
                              style={{ marginLeft: "240px" }}
                            >
                              0đ
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot className="total-line-table-footer">
                        <tr className="total-line">
                          <td className="total-line-name payment-due-label">
                            <span className="payment-due-label-total">
                              Tổng cộng
                            </span>
                          </td>
                          <td className="total-line-name payment-due">
                            <span className="payment-due-price">
                              1,190,000₫
                            </span>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

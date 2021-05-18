import React from "react";
import { Badge } from "react-bootstrap";
import logo from "../../assets/logo_logo.png";
import {Link} from "react-router-dom";
export default function Header() {
  return (
    <>
        <div className="fix-xxx">
          <div className="gearvn-top-banner-block">
            <a href="#">
              <div className="gearvn-top-banner oktr"></div>
            </a>
          </div>
          <div className="headerxxx">
            <div className="container gearvn-content-section">
              <div className="row">
                <div className="left_header" style={{ zIndex: 997 }}>
                  {/* <a href="#">
                    <img src={logo} title="Logo" alt="NBSTORE" />
                  </a> */}
                  <Link to="/">
                       <img src={logo} title="Logo" alt="NBSTORE" />
                  </Link>
                </div>
                {/* <div className="right_header">
                            <div className="pd5 fl1">
                                <div className="search">
                                    <div className="input-search">
                                            <form className="popup-content ultimate-search" role="search" className="searchbox">
                                                  <input name="q" type="text" placeholder="Tìm kiếm sản phẩm...." className="inputbox search-query" autoComplete="off"/>
                                                  <button className="btn-search btn btn-link" type="submit" >
                                                    <span className="fa fa-search" aria-hidden="true"></span>
                                                  </button>
                                            </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                <div className="right_header">
                  <div className=" pd5 fl1 ">
                    <div id="search">
                      <div className="search">
                        <form
                          id="searchbox"
                          className="popup-content ultimate-search"
                          role="search"
                        >
                          <input
                            name="q"
                            type="text"
                            placeholder="Nhập mã hoặc tên sản phẩm....."
                            className="inputbox search-query"
                            autoComplete="off"
                          />
                          <button
                            className="btn-search btn btn-link"
                            type="submit"
                          >
                            <span
                              className="fa fa-search"
                              aria-hidden="true"
                            ></span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className=" pdl0 fl1 ">
                    <div className="gearvn-right-top-block">
                      {/* <a href="#" className="gearvn-header-top-item">
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/ak1.png?v=19349" />
                        <div className="header-right-description">
                          <div className="gearvn-text">Đăng ký</div>
                        </div>
                      </a> */}
                      <Link to="/Register" className="gearvn-header-top-item"> 
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/ak1.png?v=19349" />
                          <div className="header-right-description">
                            <div className="gearvn-text">Đăng ký</div>
                          </div>
                      </Link>
                      {/* <a href="#" className="gearvn-header-top-item">
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/ak3.png?v=19349" />
                        <div className="header-right-description">
                          <div className="gearvn-text">Đăng nhập</div>
                        </div>
                      </a> */}
                      <Link to="/Login" className="gearvn-header-top-item">
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/ak3.png?v=19349" />
                          <div className="header-right-description">
                            <div className="gearvn-text">Đăng nhập</div>
                          </div>
                      </Link>
                      <a href="#" className="gearvn-header-top-item">
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/ak4.png?v=19349" />
                        <div className="header-right-description">
                          <div className="gearvn-text">Khuyến mãi</div>
                        </div>
                      </a>
                      <a href="#" className="gearvn-header-top-item rela">
                        {/* <img src="//theme.hstatic.net/1000026716/1000440777/14/ak4.png?v=19349"/>
                                        <div className="header-right-description">
                                            <div className="gearvn-text">Khuyến mãi</div>
                                        </div> */}
                        <div>
                          <Badge variant="danger">0</Badge>
                        </div>
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/ak5.png?v=19349" />
                        <div className="header-right-description">
                          <div className="gearvn-text">Giỏ hàng</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="gearvn-info-top">
                    <ul>
                      <li>
                        <span>
                          <a href="#" style={{ color: "#ea1c00" }}>
                            Hệ thống Showroom tại TP. Hồ Chí Minh - Hà Nội
                          </a>
                        </span>
                      </li>
                      <li>
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/hotcall.svg?v=19349" />
                        <span>
                          <a href="#" style={{ color: "#ea1c00" }}>
                            Tổng đài
                          </a>
                        </span>
                      </li>
                      <li>
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/youtube.png?v=19349" />
                        <span>
                          <a href="#" style={{ color: "#ea1c00" }}>
                            Video
                          </a>
                        </span>
                      </li>
                      <li>
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/gNewsFavIco.png?v=19349" />
                        <span>
                          <a href="#" style={{ color: "#ea1c00" }}>
                            Xây dựng cấu hình
                          </a>
                        </span>
                      </li>
                      <li>
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/logo_hr.png?v=19349" />
                        <span>
                          <a href="#" style={{ color: "#ea1c00" }}>
                            Liên hệ
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gearvn-content-section padding-10-0 hidden-xs hidden-sm container">
            <div className="content-flex top-header-bar">
              <span className="style-nav-fix hidden">
                <i className="fa fa-bars"></i>
                Danh mục sản phẩm
              </span>
              <div className="gearvn-header-navigation-right content-flex">
                <a className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                  <div className="xxxkt">
                    <img src="//theme.hstatic.net/1000026716/1000440777/14/xk1s.png?v=19349" />

                    <img src="//theme.hstatic.net/1000026716/1000440777/14/xk1s.png?v=19349" />
                  </div>
                  Tổng hợp Khuyến mãi
                </a>
                <a className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                  <div className="xxxkt">
                    <img src="//theme.hstatic.net/1000026716/1000440777/14/xk2.png?v=19349" />

                    <img src="//theme.hstatic.net/1000026716/1000440777/14/xk2.png?v=19349" />
                  </div>
                  Hướng dẫn thanh toán
                </a>
                <a className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                  <div className="xxxkt">
                    <img src="//theme.hstatic.net/1000026716/1000440777/14/xk2.png?v=19349" />

                    <img src="//theme.hstatic.net/1000026716/1000440777/14/xk2.png?v=19349" />
                  </div>
                  Hướng dẫn trả góp
                </a>
                <a className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                  <div className="xxxkt">
                    <img src="//theme.hstatic.net/1000026716/1000440777/14/xk4.png?v=19349" />

                    <img src="//theme.hstatic.net/1000026716/1000440777/14/xk4.png?v=19349" />
                  </div>
                  Chính sách bảo hành
                </a>
                <a className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                  <div className="xxxkt">
                    <img src="//theme.hstatic.net/1000026716/1000440777/14/xk5.png?v=19349" />

                    <img src="//theme.hstatic.net/1000026716/1000440777/14/xk5.png?v=19349" />
                  </div>
                  Chính Sách Vận Chuyển
                </a>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}

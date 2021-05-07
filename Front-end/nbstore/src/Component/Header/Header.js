import React from "react";
import { Badge, Carousel } from "react-bootstrap";
import logo from "../../assets/logo_logo.png";
import "./Header.css";
export default function Header() {
  return (
    <>
           <div className="header">
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
                  <a href="#">
                    <img src={logo} title="Logo" alt="NBSTORE" />
                  </a>
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
                      <a href="#" className="gearvn-header-top-item">
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/ak1.png?v=19349" />
                        <div className="header-right-description">
                          <div className="gearvn-text">Đăng ký</div>
                        </div>
                      </a>
                      <a href="#" className="gearvn-header-top-item">
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/ak3.png?v=19349" />
                        <div className="header-right-description">
                          <div className="gearvn-text">Đăng nhập</div>
                        </div>
                      </a>
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
                  Chính sách bảo hành
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="gearvn-header-navigation ">
          <div className="row gearvn-content-section gearvn-header-navigation-content padding-10-0 container">
            <div className="gearvn-header-menu">
              <div className="cat-menu gearvn-cat-menu">
                <nav id="megamenu-nav" className="megamenu-nav">
                  <ol
                    className="megamenu-nav-primary responsive"
                    className="megamenu-nav-main"
                  >
                    <li className="cat-menu-item ">
                      <a className="gearvn-cat-menu-item" href="#">
                        <span className="gearvn-cat-menu-icon">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=19349" />
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=19349" />
                        </span>
                        <span className="gearvn-cat-menu-name">Laptop</span>
                      </a>
                    </li>
                    <li className="cat-menu-item ">
                      <a className="gearvn-cat-menu-item" href="#">
                        <span className="gearvn-cat-menu-icon">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx22.png?v=19349" />
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx22.png?v=19349" />
                        </span>
                        <span className="gearvn-cat-menu-name">PC Gaming</span>
                      </a>
                    </li>
                    <li className="cat-menu-item ">
                      <a className="gearvn-cat-menu-item" href="#">
                        <span className="gearvn-cat-menu-icon">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx22.png?v=19349" />
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx22.png?v=19349" />
                        </span>
                        <span className="gearvn-cat-menu-name">
                          PC - Workstation
                        </span>
                      </a>
                    </li>
                    <li className="cat-menu-item ">
                      <a className="gearvn-cat-menu-item" href="#">
                        <span className="gearvn-cat-menu-icon">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx22.png?v=19349" />
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx22.png?v=19349" />
                        </span>
                        <span className="gearvn-cat-menu-name">
                          PC văn phòng
                        </span>
                      </a>
                    </li>
                    <li className="cat-menu-item ">
                      <a className="gearvn-cat-menu-item" href="#">
                        <span className="gearvn-cat-menu-icon">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx25.png?v=19349" />
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx25.png?v=19349" />
                        </span>
                        <span className="gearvn-cat-menu-name">
                          Linh kiện PC
                        </span>
                      </a>
                    </li>
                    <li className="cat-menu-item ">
                      <a className="gearvn-cat-menu-item" href="#">
                        <span className="gearvn-cat-menu-icon">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx26.png?v=19349" />
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx26.png?v=19349" />
                        </span>
                        <span className="gearvn-cat-menu-name">Màn hình</span>
                      </a>
                    </li>
                    <li className="cat-menu-item ">
                      <a className="gearvn-cat-menu-item" href="#">
                        <span className="gearvn-cat-menu-icon">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx27.png?v=19349" />
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx27.png?v=19349" />
                        </span>
                        <span className="gearvn-cat-menu-name">Bàn Phím</span>
                      </a>
                    </li>
                    <li className="cat-menu-item ">
                      <a className="gearvn-cat-menu-item" href="#">
                        <span className="gearvn-cat-menu-icon">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx28.png?v=19349" />
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx28.png?v=19349" />
                        </span>
                        <span className="gearvn-cat-menu-name">
                          Chuột + Lót chuột
                        </span>
                      </a>
                    </li>
                    <li className="cat-menu-item ">
                      <a className="gearvn-cat-menu-item" href="#">
                        <span className="gearvn-cat-menu-icon">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx29.png?v=19349" />
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx29.png?v=19349" />
                        </span>
                        <span className="gearvn-cat-menu-name">
                          Tai nghe Gaming
                        </span>
                      </a>
                    </li>
                    <li className="cat-menu-item ">
                      <a className="gearvn-cat-menu-item" href="#">
                        <span className="gearvn-cat-menu-icon">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx210.png?v=19349" />
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx210.png?v=19349" />
                        </span>
                        <span className="gearvn-cat-menu-name">Ghế Gaming</span>
                      </a>
                    </li>
                    <li className="cat-menu-item ">
                      <a className="gearvn-cat-menu-item" href="#">
                        <span className="gearvn-cat-menu-icon">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx22.png?v=19349" />
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx22.png?v=19349" />
                        </span>
                        <span className="gearvn-cat-menu-name">Phụ kiện</span>
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="gearvn-header-navigation-block">
              <div className="gearvn-header-banner">
                <div className="left">
                  <div className="slider-wrap">
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="//theme.hstatic.net/1000026716/1000440777/14/slideshow_2.jpg?v=19349"
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="//theme.hstatic.net/1000026716/1000440777/14/slideshow_4.jpg?v=19349"
                          alt="Second slide"
                        />
                      </Carousel.Item>

                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="//theme.hstatic.net/1000026716/1000440777/14/slideshow_5.jpg?v=19349"
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="//theme.hstatic.net/1000026716/1000440777/14/slideshow_9.jpg?v=19349"
                          alt="Third slide"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <div className="sub-banner-wrap i100">
                    <a className="sub-item" href="#">
                      <img src="//theme.hstatic.net/1000026716/1000440777/14/solid4.jpg?v=19359" />
                    </a>
                    <a className="sub-item" href="#">
                      <img src="//theme.hstatic.net/1000026716/1000440777/14/solid5.jpg?v=19359" />
                    </a>
                  </div>
                </div>
                <div className="right i100">
                  <div className="sub-item-right">
                    <a className="sub-item" href="#">
                      <img src="//theme.hstatic.net/1000026716/1000440777/14/solid1.jpg?v=19359" />
                    </a>
                    <a className="sub-item" href="#">
                      <img src="//theme.hstatic.net/1000026716/1000440777/14/solid2.jpg?v=19359" />
                    </a>
                    <a className="sub-item" href="#">
                      <img src="//theme.hstatic.net/1000026716/1000440777/14/solid3.jpg?v=19359" />
                    </a>
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

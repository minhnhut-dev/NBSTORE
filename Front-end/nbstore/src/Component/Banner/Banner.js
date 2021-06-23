import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import {Link} from "react-router-dom";
export default function Banner() {
  return (
    <>
        <div className="gearvn-header-navigation ">
          <div className="row gearvn-content-section gearvn-header-navigation-content padding-10-0 container">
            <div className="gearvn-header-menu">
              <div className="cat-menu gearvn-cat-menu">
                <nav id="megamenu-nav" className="megamenu-nav">
                  <ol
                    className="megamenu-nav-main"
                  >
                    <li className="cat-menu-item ">
                      {/* <a className="gearvn-cat-menu-item" href="#">
                        <span className="gearvn-cat-menu-icon">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=19349" />
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=19349" />
                        </span>
                        <span className="gearvn-cat-menu-name">Laptop</span>
                      </a> */}
                      <Link className="gearvn-cat-menu-item" to="/collections">
                      <span className="gearvn-cat-menu-icon">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=19349" />
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=19349" />
                        </span>
                        <span className="gearvn-cat-menu-name">Laptop</span>
                      </Link>
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
      <div className=" gearvn-content-section i100 mb-10" id="xxx-banner">
        <div className="row row-margin-small">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-10 col-padding-small">
            <div className="border-rus">
              <a href="#">
                <img src="//theme.hstatic.net/1000026716/1000440777/14/xxxbanner1.jpg?v=19359" />
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-10 col-padding-small">
            <div className="border-rus">
              <a href="#">
                <img src="//theme.hstatic.net/1000026716/1000440777/14/xxxbanner2.jpg?v=19359" />
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-10 col-padding-small">
            <div className="border-rus">
              <a href="#">
                <img src="//theme.hstatic.net/1000026716/1000440777/14/xxxbanner3.jpg?v=19359" />
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-10 col-padding-small">
            <div className="border-rus">
              <a href="#">
                <img src="//theme.hstatic.net/1000026716/1000440777/14/xxxbanner4.jpg?v=19359" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

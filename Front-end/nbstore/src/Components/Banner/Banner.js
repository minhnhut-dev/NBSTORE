import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";
import slide1 from "../../assets/slide.png";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
export default function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container mt-4 box-sliding">
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3 box-sliding__left">
              <div className="row pr-4">
                <ul className="col-md-12 list-unstyled m-0 bg-white border-radius shadow-sm box-list-menu">
                  <li className="menu-item">
                    <a href="#">
                      <i class="icon-cps-3"></i>
                      <span>Điện thoại</span>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </li>
                  {/**Laptop */}
                  <li className="menu-item">
                    <a href="#">
                      <i className="icon-cps-380" aria-hidden="true"></i>
                      <span>Laptop</span>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>

                    <ul className="box-list-menu box-menu__child">
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </li>

                  {/**Talet */}
                  <li className="menu-item">
                    <a href="#">
                      <i className="icon-cps-4"></i>
                      <span>Tablet</span>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </li>
                  {/** Linh kiện PC */}
                  <li className="menu-item">
                    <a href="#">
                      <i className="icon-cps-tech"></i>
                      <span>Linh kiện PC</span>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </li>
                  {/**âm thanh */}
                  <li className="menu-item">
                    <a href="#">
                      <i className="icon-cps-30"></i>
                      <span>Phụ kiện</span>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </li>
                  {/**gaming gear*/}

                  <li className="menu-item">
                    <a href="#">
                      <i
                        class="fas fa-keyboard"
                        style={{ fontSize: "20px" }}
                      ></i>
                      <span style={{ marginLeft: "8px" }}>Gaming Gear</span>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </li>
                  {/**Thu cũ */}
                  <li className="menu-item">
                    <a href="#">
                      <i class="icon-cps-tcdm"></i>
                      <span>Mua cũ</span>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </li>
                  {/**màn hình */}
                  <li className="menu-item">
                    <a href="#">
                      <i
                        class="fas fa-desktop"
                        style={{ fontSize: "20px" }}
                      ></i>
                      <span style={{ marginLeft: "8px" }}>Màn hình</span>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                      <li className="menu-item">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-sm-5 col-xs-5 border-radius shadow-sm overflow-hidden box-sliding__center">
              <div className="row">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/Right_Banner_Text_Onlyn20.png"
                      alt="First slide"
                    />
                
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/Right_Banner_Text_Onlyn20.png"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/690x300_PDP-_-C_-C_p.png"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <div className="col-md-3 col-sm-3 col-xs-3 box-sliding__right">
                <div className="row pl-4">
                    <div className="col-md-12">
                        <div className="row">
                           
                            <div className="col-md-12 right__box-img">
                                 <a href="#" >
                               <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/Right_Banner_Text_Onlyn20.png" alt="sale" className="border-radius shadow-sm cpslazy loaded" data-ll-status="loaded" 
                               style={{height:"115px"}}
            
                               />
                            </a>
                            </div>

                            <div className="col-md-12 right__box-img">
                                 <a href="#" >
                               <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/RightBanner_Desktopa12.png" alt="sale" className="border-radius shadow-sm cpslazy loaded" data-ll-status="loaded" 
                               style={{height:"115px"}}
            
                               />
                            </a>
                            </div>
                            <div className="col-md-12 right__box-img">
                                 <a href="#" >
                               <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/Mi_11_Lite_640x278_copy222_1.png" alt="sale" className="border-radius shadow-sm cpslazy loaded" data-ll-status="loaded" 
                               style={{height:"115px"}}
                               />
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}

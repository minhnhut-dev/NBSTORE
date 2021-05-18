import React from 'react';
import Header  from "../../Component/Header/Header";
import {Link} from "react-router-dom";
import "./TypeProduct.css";
export default function TypeProduct() {
    return (
      <>
        <Header/>
        <div className="noindex">
            <section className="light_section">
                <div id="collection" className="container">
                      <div className="col-sm-12">
                            <h1 className="title-box-collection" style={{fontSize:"36px"}}>PC Gaming</h1>
                            <div className="row">
                                  <div className="main-content">
                                        <div id="breadcrumb">
                                            <div className="main">
                                                <div className="breadcrumbs container">
                                                      <span className="showHere">Bạn đang ở</span>
                                                      <Link to="#" className="pathway">Trang chủ</Link>
                                                      <span>
                                                            <i className="fa fa-caret-right"></i>
                                                            PC Workstation Chuyên Render-Dựng Phim-Đồ Họa
                                                      </span>
                                                </div>  
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                              <div className="row">
                                                  <div className="col-sm-12 wrap-sort-by">
                                                        <div className="browse-tags pull-right">
                                                              <span>
                                                                Sắp xếp theo: 
                                                              </span>
                                                              <span className="custom-dropdown custom-dropdown--white">
                                                                  <select className="sort-by custom-dropdown__select custom-dropdown__select--white"> 
                                                                        <option>Sản phẩm nổi bật</option>
                                                                        <option>Giá: Tăng dần</option>
                                                                        <option>Sản phẩm nổi bật</option>
                                                                  </select>
                                                              </span>
                                                        </div>
                                                  </div>
                                              </div>
                                        </div>
                                  </div>
                            </div>
                      </div>
                </div>
            </section>
        </div>
      </>
    );
}

 
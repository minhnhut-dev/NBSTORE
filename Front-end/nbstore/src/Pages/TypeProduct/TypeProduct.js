import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";
import "./TypeProduct.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
export default function TypeProduct() {
  return (
    <>
      <Header />
      <div className="noindex">
        <section className="light_section">
          <div id="collection" className="container">
            <div className="col-sm-12">
              <h1 className="title-box-collection" style={{ fontSize: "36px" }}>
                PC Gaming
              </h1>
              <div className="row">
                <div className="main-content">
                  <div id="breadcrumb">
                    <div className="main">
                      <div className="breadcrumbs container">
                        <span className="showHere">Bạn đang ở</span>
                        <Link to="#" className="pathway">
                          Trang chủ
                        </Link>
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
                          {/* <span>Sắp xếp theo:</span> 
                         <span className="custom-dropdown custom-dropdown--white">
                            <select className="sort-by custom-dropdown__select custom-dropdown__select--white">
                              <option>Sản phẩm nổi bật</option>
                              <option>Giá: Tăng dần</option>
                              <option>Sản phẩm nổi bật</option>
                            </select>
                          </span> */}
                          <FormControl variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                              Tùy chọn
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="Age"
                            >
                              <MenuItem value="">
                                <em>Tùy chọn</em>
                              </MenuItem>
                              <MenuItem value={10}>Sắp xếp theo giá tăng dần</MenuItem>
                              <MenuItem value={20}>Sắp xếp theo giá giảm dần</MenuItem>
                              <MenuItem value={30}>Mới nhất</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 product-list">
                    <div className="row content-product-list">
                      <div className="col-sm-4 col-xs-12 padding-none col-fix20">
                        <div className="product-row">
                          <a href="#"></a>
                          <div className="product-row-img">
                            <Link to="/ProductDetail">
                              <img
                                src="//product.hstatic.net/1000026716/product/r4st_e4cdcf53ef724ad093cc2d439bdd5994_large.png"
                                className="product-row-thumbnail"
                              />
                            </Link>
                            <div className="product-row-price-hover">
                              <a href="#">
                                <div className="product-row-note pull-left">
                                  Xem chi tiết
                                </div>
                              </a>
                              <a
                                href="#"
                                className="product-row-btnbuy pull-right"
                              >
                                đặt hàng
                              </a>
                            </div>
                          </div>

                          <h2 className="product-row-name">
                            Laptop gaming Acer Aspire 7 A715 42G R4ST
                          </h2>
                          <div className="product-row-info">
                            <div className="product-row-price pull-left">
                              <del>17,290,000₫</del>
                              <br />
                              <span className="product-row-sale">
                                17,290,000₫
                              </span>
                            </div>
                            <div className="new-product-percent">-10%</div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-4 col-xs-12 padding-none col-fix20">
                        <div className="product-row">
                          <a href="#"></a>
                          <div className="product-row-img">
                            <a href="#">
                              <img
                                src="//product.hstatic.net/1000026716/product/r4st_e4cdcf53ef724ad093cc2d439bdd5994_large.png"
                                className="product-row-thumbnail"
                              />
                            </a>
                            <div className="product-row-price-hover">
                              <a href="#">
                                <div className="product-row-note pull-left">
                                  Xem chi tiết
                                </div>
                              </a>
                              <a
                                href="#"
                                className="product-row-btnbuy pull-right"
                              >
                                đặt hàng
                              </a>
                            </div>
                          </div>
                          <h2 className="product-row-name">
                            Laptop gaming Acer Aspire 7 A715 42G R4ST
                          </h2>
                          <div className="product-row-info">
                            <div className="product-row-price pull-left">
                              <del>17,290,000₫</del>
                              <br />
                              <span className="product-row-sale">
                                17,290,000₫
                              </span>
                            </div>
                            <div className="new-product-percent">-10%</div>
                          </div>
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

      <Footer />
    </>
  );
}

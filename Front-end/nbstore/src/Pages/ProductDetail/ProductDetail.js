import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import "./ProductDetail.css";
import { Button } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function ProductDetail() {
  const images = [
    "//product.hstatic.net/1000026716/product/r4st_e4cdcf53ef724ad093cc2d439bdd5994_large.png",
    "//product.hstatic.net/1000026716/product/r9jm_541c5029fbf64796b9936a91a52105d8_large.png",
    "//product.hstatic.net/1000026716/product/78tn_a29a4ed5ae4142e6ad3c3cd2fb28a8d2_large.png",
  ];
  const [selectedImage, SetSelectedImage] = useState(images[0]);

  // console.log("image[0] :",selectedImage);
  return (
    <>
      <Header />

      <div className="noindex">
        <div id="breadcrumb">
          <div className="main">
            <div className="breadcrumbs container">
              <span className="showHere">Bạn đang ở:</span>
              <a href="#" className="path">
                Trang Chủ
              </a>
              <i className="fa fa-caret-right"></i>
              <span>
                <a href="#">Laptop</a>
              </span>
              <i className="fa fa-caret-right"></i>
              <span className="path">Acer Nitro5</span>
            </div>
          </div>
        </div>
        <div id="mainframe">
          <div className="container">
            <div id="maincontent">
              <div id="system-message-container">
                <div id="system-message"></div>
              </div>
              <div className="page_content">
                <div className="row">
                  <div className="col-sm-6 col-xs-12 product_thumbnail">
                    <img
                      src={selectedImage}
                      alt="selected"
                      className="Selected"
                    />
                    <div className="imgContainer">
                      {images.map((img, index) => (
                        <img
                          src={img}
                          key={index}
                          style={{
                            border:
                              selectedImage === img ? "3px solid purple" : "",
                          }}
                          onClick={() => SetSelectedImage(img)}
                        />
                      ))}
                      ;
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12 product_parameters">
                    <h1 className="product_name">
                      Laptop gaming Acer Aspire 7 A715 42G R4ST
                    </h1>
                    <div className="ins-preview-wrapper ins-preview-wrapper-145">
                      <div className="img-nb">
                        <img src="https://image.useinsider.com/gearvn/defaultImageLibrary/81721246_549814752275222_5174665937835524096_n-LPC3yvsFp2VYuVOl7AQz1578559780.png" />
                      </div>
                      <span className="follower">25</span>
                      <span className="follower">
                        người đang quan tâm sản phẩm
                      </span>
                    </div>
                    <p className="Brand-product">
                      <span>Hãng sản xuất : Acer</span>
                    </p>
                    <p className="Product-warranty">
                      <span>Bảo hành : 12 tháng</span>
                    </p>
                    <p>
                      <span style={{ fontSize: "15pt", color: "#ff0000" }}>
                        <strong>Quà Tặng</strong>
                        <strong>:</strong>
                      </span>
                    </p>
                    <p>
                      <span style={{ fontSize: "15pt" }}>
                        <strong>
                          <span style={{ color: "#ff0000" }}>★</span>
                          <span>&nbsp;</span>
                          <span style={{ color: "#0000ff" }}>
                            Tặng người yêu khi mua sản phẩm này
                          </span>
                        </strong>
                      </span>
                    </p>
                    <p>
                      <span style={{ fontSize: "15pt" }}>
                        <strong>
                          <span style={{ color: "#ff0000" }}>★</span>
                          <span>&nbsp;</span>
                          <span style={{ color: "#0000ff" }}>
                            Tặng thêm đứa con quá hời
                          </span>
                        </strong>
                      </span>
                    </p>
                    <form id="add-item-form-2" name="shoppingCart">
                      <div className="product_nav_btn">
                        <div className="product_sales_off pull-left">
                          <span className="price-text">Giá cũ :</span>
                          <span className="product_price">
                            <del>18,490,000₫</del>
                          </span>
                          <br />
                          <span className="price-text">Giá KM:</span>
                          <span className="product_sale_price">
                            17,290,000₫{" "}
                          </span>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="form-group">
                        <Button className="product_buy_btn btn-success theme_button addtocar">
                          Mua Hàng
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="ins-preview-wrapper ins-preview-wrapper-2587" style={{display:"block",visibility:"visible"}}>
                      <div className="ins-content-wrapper ins-content-wrapper-2587">

                      </div>
                </div> */}
                {/**Sản phẩm thường được xem cùng */}
                <div id="featured-product">
                  <div style={{ position: "relative" }}>
                    <h2 className="new-product-title">
                      Sản Phẩm thường được xem cùng
                    </h2>
                    <a className="gearvn-new-products-hot-view-all" href="#">
                      Xem tất cả
                      <i className="fa fa-chevron-right"></i>
                    </a>
                  </div>
                  <div className="loop-pro">
                    <div className="module-products row">
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
                <div id="product_content_detail" className="row">
                  <Tabs>
                    <TabList>
                      <Tab>Thông tin sản phẩm</Tab>
                      <Tab>Tiêu Biểu</Tab>
                    </TabList>

                    <TabPanel>
                      <h4 style={{color:"red",textDecoration:"underline"}}>
                        <strong>Thông tin sản phẩm</strong>
                      </h4>
                      <div className="scroll-table">
                            <table className="table table-bordered mce-item-table">
                                <tbody>
                                  <tr className="row-info" style={{height:"35px"}}>
                                    <td className="name-Product" >
                                      <span style={{color:"black"}}>CPU</span>
                                    </td>
                                    <td className="info-Product">AMD Ryzen 5 – 5500U</td>
                                  </tr>
                                  <tr className="row-info">
                                    <td className="name-Product">
                                      <span style={{color:"black"}}>RAM</span>
                                    </td>
                                    <td className="info-Product">16GB</td>
                                  </tr>
                                </tbody>
                            </table>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <h2>Any content 2</h2>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

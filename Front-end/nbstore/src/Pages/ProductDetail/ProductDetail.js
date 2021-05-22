import React, { useState, useEffect } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./ProductDetail.css";
import { Button } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router";
import axios from "axios";
import NumberFormat from "react-number-format";

function ProductDetail(props) {
  const images = [
    "//product.hstatic.net/1000026716/product/r4st_e4cdcf53ef724ad093cc2d439bdd5994_large.png",
    "//product.hstatic.net/1000026716/product/r9jm_541c5029fbf64796b9936a91a52105d8_large.png",
    "//product.hstatic.net/1000026716/product/78tn_a29a4ed5ae4142e6ad3c3cd2fb28a8d2_large.png",
  ];
  const [selectedImage, SetSelectedImage] = useState(images[0]);
  const [Product, SetProducts] = useState([]);
  const { products } = props;
  let { id } = useParams();
  console.log("id:", { id });
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/GetProductByID/${id}`)
      .then((response) => {
        console.log("Response :", response);
        SetProducts(response.data);
      });
  }, []);

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
                  {Product.map((item) => (
                    <div className="col-sm-6 col-xs-12 product_parameters">
                      <h1 className="product_name">
                        {item.TenSanPham}
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
                        <span>Hãng sản xuất : {item.HangSanXuat}</span>
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
                            <NumberFormat
                                value={item.GiaCu}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <del {...props}>{value}</del>
                                )}
                              />
                            </span>
                            <br />
                            <span className="price-text">Giá KM:</span>
                            <span className="product_sale_price">
                            <NumberFormat
                                value={item.GiaKM}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <span {...props}>{value}</span>
                                )}
                              />
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
                  ))}
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
                      <h5 style={{ color: "red", textDecoration: "underline" }}>
                        <strong>Thông tin sản phẩm</strong>
                      </h5>
                      <div className="scroll-table">
                        <table className="table table-bordered mce-item-table">
                          <tbody>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>CPU</span>
                              </td>
                              <td className="info-Product">
                                AMD Ryzen 5 – 5500U
                              </td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>RAM</span>
                              </td>
                              <td className="info-Product">16GB</td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>Ổ cứng</span>
                              </td>
                              <td className="info-Product">256GB</td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>
                                  Card đồ họa
                                </span>
                              </td>
                              <td className="info-Product">
                                NVIDIA GeForce GTX 1650 4GB GDDR6
                              </td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>Màn hình</span>
                              </td>
                              <td className="info-Product">
                                15.6" FHD (1920 x 1080) IPS, Anti-Glare, 60Hz
                              </td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>
                                  Cổng giao tiếp
                                </span>
                              </td>
                              <td className="info-Product">
                                1x USB 3.0 1x USB Type C 2x USB 2.0 1x HDMI 1x
                                RJ45
                              </td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>Ổ quang</span>
                              </td>
                              <td className="info-Product">None</td>
                            </tr>
                            <tr className="row-info">
                              <td className="name-Product">
                                <span style={{ color: "black" }}>Audio</span>
                              </td>
                              <td className="info-Product">
                                True Harmony; Dolby® Audio Premium
                              </td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>
                                  Đọc thẻ nhớ
                                </span>
                              </td>
                              <td className="info-Product">None</td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>
                                  Chuẩn Lan
                                </span>
                              </td>
                              <td className="info-Product">
                                10/100/1000/Gigabits Base T
                              </td>
                            </tr>
                            <tr className="row-info">
                              <td className="name-Product">
                                <span style={{ color: "black" }}>
                                  Chuẩn WIFI
                                </span>
                              </td>
                              <td className="info-Product">
                                Wi-Fi 6(Gig+)(802.11ax) (2x2)
                              </td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>
                                  Bluetooth
                                </span>
                              </td>
                              <td className="info-Product">v5.0</td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>Webcam</span>
                              </td>
                              <td className="info-Product">HD Webcam</td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>
                                  Hệ điều hành
                                </span>
                              </td>
                              <td className="info-Product">Windows 10 Home</td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>Pin</span>
                              </td>
                              <td className="info-Product">4cell</td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>
                                  Trọng lượng
                                </span>
                              </td>
                              <td className="info-Product">2.1KG</td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>Màu sắc</span>
                              </td>
                              <td className="info-Product">
                                Đen, Có đèn bàn phím
                              </td>
                            </tr>
                            <tr className="row-info" style={{ height: "35px" }}>
                              <td className="name-Product">
                                <span style={{ color: "black" }}>
                                  Kích thước
                                </span>
                              </td>
                              <td className="info-Product">
                                363.4 x 254.5 x 23.25 (mm)
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h2>
                        <span style={{ fontSize: "15pt" }}>
                          Đánh giá chi tiết :&nbsp;
                        </span>
                        <span style={{ fontSize: "15pt" }}>
                          <br />
                        </span>
                      </h2>
                      <p>
                        <img src="https://file.hstatic.net/1000026716/file/1_8adb7d38a9094a94a450be9b3a5c1d05.png" />
                      </p>
                      <h3 style={{ textAlign: "left" }}>
                        <span style={{ color: "#000000" }}>
                          Laptop Gaming Tốt Nhất Phân Khúc
                        </span>
                      </h3>
                      <p style={{ textAlign: "justify" }}>
                        <span style={{ color: "#000000" }}>
                          Acer Aspire 7 2020 A715 42G R4ST tích hợp card đồ họa
                          NVIDIA GTX1650 4GB GDDR6 ra mắt năm 2020, là laptop
                          chơi game tốt nhất phân khúc. Không chỉ vậy, phiên bản
                          này còn mang thiết kế mới gọn gàng và sexy hơn. Aspire
                          7 2020 được trang bị hệ thống tản nhiệt mạnh mẽ bậc
                          nhất trong phân khúc, thừa hưởng công nghệ từ các dòng
                          máy cao cấp hơn của Acer, cùng cấu hình đỉnh cao, giúp
                          cho người dùng có thể vừa chơi game vừa làm việc ở bất
                          cứ lúc nào.
                        </span>
                      </p>
                      <p>
                        <img src="https://file.hstatic.net/1000026716/file/2_5f8ab09ec95547a9ad2975be2f96300e.png" />
                      </p>
                      <h3 style={{ textAlign: "left" }}>
                        <span style={{ color: "#000000" }}>
                          THIẾT KẾ TỐI ƯU TRẢI NGHIỆM CHƠI GAME
                        </span>
                      </h3>
                      <p style={{ textAlign: "justify" }}>
                        <span style={{ color: "#000000" }}>
                          Hệ thống hai quạt tản nhiệt, 3 ống đồng fullsize,
                          heatsink size lớn giúp Acer Aspire 7 A715 2020 tối ưu
                          khả năng tản nhiệt. Bản lề thiết kế chắc chắn ít bị
                          rung lắc khi chơi, có khả năng mở góc 180 độ giúp bảo
                          vệ máy tốt hơn.
                        </span>
                      </p>
                      <p>
                        <img src="https://file.hstatic.net/1000026716/file/3_21a5af15cbc64fdcab3dc6b881d31f76.png" />
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <h2>Cẩm Nhung xinh đẹp </h2>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
            {/* <div id="binhluan">
            <div className="title-bl">
                <h2>Bình Luận</h2>
            </div>
        </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;

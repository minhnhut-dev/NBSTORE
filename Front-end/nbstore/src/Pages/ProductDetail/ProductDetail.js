import React, { useState, useEffect } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./ProductDetail.css";
import { Button, Form } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router";
import axios from "axios";
import NumberFormat from "react-number-format";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import { useSnackbar } from "notistack";

import {
  Divider,
  Avatar,
  Grid,
  Paper,
  TextField,
  Box,
} from "@material-ui/core";
import Comment from "../../Component/Comment/Comment";

SwiperCore.use([Navigation, Thumbs]);
const userLogin = JSON.parse(localStorage.getItem("userLogin") || "[]");

function ProductDetail(props) {
  const [selectedImage, SetSelectedImage] = useState([0]);
  const [Product, SetProducts] = useState([]);
  const [suggestProduct, setSuggestProduct] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [comment, setComment] = useState([]);
  const [content, setContent] = useState("");
  const { onAdd } = props;
  const { enqueueSnackbar } = useSnackbar();

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/GetProductByID/${id}`)
      .then((response) => {
        if (response.data == "") {
          return null;
        } else {
          console.log(response.data);
          SetProducts(response.data);
        }
      });

    axios
      .get(`http://127.0.0.1:8000/api/GetImageProductByID/${id}`)
      .then((res) => {
        SetSelectedImage(res.data);
      });

    axios.get(`http://127.0.0.1:8000/api/suggestProduct/1`).then((response) => {
      setSuggestProduct(response.data);
    });
    axios
      .get(`http://127.0.0.1:8000/api/getComments/${id}`)
      .then((response) => {
        setComment(response.data);
      });
  }, []);

  const handlePostComment = () => {
    const data = {
      content: content,
      nguoi_dungs_id: userLogin.id,
      san_phams_id: id,
    };
    axios
      .post("http://127.0.0.1:8000/api/AddComment", data)
      .then((response) => {
        axios
          .get(`http://127.0.0.1:8000/api/getComments/${id}`)
          .then((response) => {
            setComment(response.data);
          });
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.message != undefined) {
          enqueueSnackbar(err.response.data.message, {
            variant: "error",
            autoHideDuration: 3000,
            preventDuplicate: true,
          });
        }
      });
  };
  const LinkImage = "http://127.0.0.1:8000/images/";
  var elements = [];

  Product.forEach((element) => {
    if (element.CauHinh === "" || element.CauHinh === undefined) {
      elements.push(
        <span style={{ color: "red", fontSize: "20px", marginTop: "20px" }}>
          Sản phẩm này chưa có thông tin cấu hình
        </span>
      );
    } else {
      const configs = element.CauHinh;

      const ch = JSON.parse(configs);

      for (const [key, value] of Object.entries(ch)) {
        // console.log(`${value.config_name}: ${value.content}`);
        elements.push(
          <tr className="row-info" style={{ height: "35px" }} key={key}>
            <td className="name-Product">
              <span style={{ color: "black" }}>{`${value.config_name}`}</span>
            </td>
            <td className="info-Product">{`${value.content}`}</td>
          </tr>
        );
      }
    }
  });
  return (
    <>
      <Header />
      <div className="noindex">
        <div id="breadcrumb">
          <div className="main">
            <div className="breadcrumbs container">
              <span className="showHere">Bạn đang ở:</span>
              <Link to="/" className="path">
                Trang Chủ
              </Link>
              <i className="fa fa-caret-right"></i>
              <span>
                <a href="#">Laptop</a>
              </span>
              <i className="fa fa-caret-right"></i>
              <span className="path">{}</span>
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
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      spaceBetween={5}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      className="mySwiper2"
                    >
                      {selectedImage.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={LinkImage + image.AnhSanPham}
                            alt={image.AnhSanPham}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={5}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesVisibility={true}
                      watchSlidesProgress={true}
                      className="mySwiper"
                    >
                      {selectedImage.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={LinkImage + image.AnhSanPham}
                            alt={image.AnhSanPham}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                   
                  </div>
                  {Product.map((item, index) => (
                    <div
                      className="col-sm-6 col-xs-12 product_parameters"
                      key={index}
                    >
                      <h1 className="product_name">{item.TenSanPham}</h1>
                      {/* <div className="ins-preview-wrapper ins-preview-wrapper-145">
                        <div className="img-nb">
                          <img
                            src="https://image.useinsider.com/gearvn/defaultImageLibrary/81721246_549814752275222_5174665937835524096_n-LPC3yvsFp2VYuVOl7AQz1578559780.png"
                            alt="gvn"
                          />
                        </div>
                        <span className="follower">25</span>
                        <span className="follower">
                          người đang quan tâm sản phẩm
                        </span>
                      </div> */}
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
                              Tặng balo khi mua sản phẩm này
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
                          {item.SoLuong == 0 ? (
                            <p style={{ color: "red", fontSize: "24px" }}>
                              Sản phẩm tạm hết hàng
                            </p>
                          ) : (
                            <Link to="/cart">
                              <Button
                                className="product_buy_btn btn-success theme_button addtocar"
                                type="button"
                                onClick={() => onAdd(item)}
                              >
                                Mua hàng
                              </Button>
                            </Link>
                          )}
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
                  </div>
                  <div className="loop-pro">
                    <div className="module-products row">
                      {suggestProduct.map((item, index) => (
                        <div
                          className="col-sm-4 col-xs-12 padding-none col-fix20"
                          key={index}
                        >
                          <div className="product-row">
                            <div className="product-row-img">
                              <Link to={`/ProductDetail/${item.id}`}>
                                <img
                                  src={LinkImage + item.AnhDaiDien}
                                  className="product-row-thumbnail"
                                  alt={item.AnhDaiDien}
                                />
                              </Link>
                              <div className="product-row-price-hover">
                                <div className="product-row-note pull-left">
                                  Xem chi tiết
                                </div>
                                <Link
                                  to={`/ProductDetail/${item.id}`}
                                  className="product-row-btnbuy pull-right"
                                >
                                  đặt hàng
                                </Link>
                              </div>
                            </div>
                            <h2 className="product-row-name">
                              {item.TenSanPham}
                            </h2>
                            <div className="product-row-info">
                              <div className="product-row-price pull-left">
                                <NumberFormat
                                  value={item.GiaCu}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  suffix={" VNĐ"}
                                  renderText={(value, props) => (
                                    <span {...props}>{value}</span>
                                  )}
                                />
                                <br />

                                <NumberFormat
                                  value={item.GiaKM}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  suffix={" VNĐ"}
                                  renderText={(value, props) => (
                                    <span
                                      className="product-row-sale"
                                      {...props}
                                    >
                                      {value}
                                    </span>
                                  )}
                                />
                              </div>
                              <div className="new-product-percent">-10%</div>
                            </div>
                          </div>
                        </div>
                      ))}
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
                          <tbody>{elements.map((item) => item)}</tbody>
                        </table>
                      </div>

                      {/*phần đánh giá chi tiết */}
                      {Product.map((item, index) => (
                        <div
                          key={index}
                          dangerouslySetInnerHTML={{ __html: item.ThongTin }}
                          className="vote-product"
                        ></div>
                      ))}
                    </TabPanel>
                    <TabPanel>
                      {/* <h2>Cẩm Nhung xinh đẹp </h2> */}
                      <div style={{ padding: 14 }} className="comment-list">
                        <h2> {comment.length} Comments cho sản phẩm này</h2>
                       <Comment comment={comment} />
                        <Paper style={{ height: "230px", marginTop: "30px" }}>
                        
                          <div className="bg-light p-2 comment">
                            <div className="d-flex flex-row align-items-start">
                              <img
                                className="rounded-circle"
                                src={userLogin.Anh}
                                width={40}
                                alt="avatar"
                              />
                              <textarea
                                className="form-control ml-1 shadow-none textarea comment-box "
                                defaultValue={""}
                                placeholder="Nhập đánh giá của bạn ở đây"
                                onChange={(e) =>setContent(e.target.value)}
                              />
                            </div>
                            <div className="mt-2 text-right">
                              <button
                              type="submit"
                              onClick={handlePostComment}
                                className="btn btn-primary btn-sm shadow-none"
                                
                              >
                                Post comment
                              </button>
                              <button
                                className="btn btn-outline-primary btn-sm ml-1 shadow-none"
                                type="button"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </Paper>
                      </div>
                      
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

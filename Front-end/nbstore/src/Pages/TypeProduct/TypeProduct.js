import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import "./TypeProduct.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
export default function TypeProduct() {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/getTypeProductById/${id}`)
      .then((response) => {
        setName(response.data.TenLoai);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://127.0.0.1:8000/api/getProductByTypeProductId/${id}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, []);
  const LinkImage= "http://127.0.0.1:8000/images/";
  return (
    <>
      <Header />
      <div className="noindex">
        <section className="light_section">
          <div id="collection" className="container">
            <div className="col-sm-12">
              <h1 className="title-box-collection" style={{ fontSize: "36px" }}>
                {name}
              </h1>
              <div className="row">
                <div className="main-content">
                  <div id="breadcrumb">
                    <div className="main">
                      <div className="breadcrumbs container">
                        <span className="showHere">Bạn đang ở</span>
                        <Link to="/" className="pathway">
                          Trang chủ
                        </Link>
                        <span>
                          <i className="fa fa-caret-right"></i>
                          {name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-sm-12 wrap-sort-by">
                        <div className="browse-tags pull-right">
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
                              <MenuItem value={1}>Sắp xếp theo giá tăng dần</MenuItem>
                              <MenuItem value={2}>Sắp xếp theo giá giảm dần</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 product-list">
                    <div className="row content-product-list">
                      {product.map((item, index) => (
                        <div className="col-sm-4 col-xs-12 padding-none col-fix20" key={index}>
                          <div className="product-row">
                            <div className="product-row-img">
                              <Link to={`/ProductDetail/${item.id}`}>
                                <img  src={LinkImage+item.AnhDaiDien}alt={item.AnhDaiDien}
                                 className="product-row-thumbnail"
                                />
                              </Link>
                              <div className="product-row-price-hover">
                                <Link to={`/ProductDetail/${item.id}`}>
                                  <div className="product-row-note pull-left">
                                    Xem chi tiết
                                  </div>
                                </Link>
                                <Link
                                  to={`/ProductDetail/${item.id}`}
                                  className="product-row-btnbuy pull-right"
                                >
                                  đặt hàng
                                </Link>
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
                      ))}
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

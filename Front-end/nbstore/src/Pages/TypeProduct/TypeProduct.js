import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import "./TypeProduct.css";
import axios from "axios";
import { Form } from "react-bootstrap";
import NumberFormat from "react-number-format";

export default function TypeProduct() {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [product, setProduct] = useState([]);
  const [sort, setSort] = useState("");
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
  const handleSort = () => {
    if (sort == 1) {
      const sortIncrease = [...product].sort((a, b) => {
        return a.GiaKM - b.GiaKM;
      });
      setProduct(sortIncrease);
    } else if (sort == 2) {
      const sortDecrease = [...product].sort((a, b) => {
        return b.GiaKM - a.GiaKM;
      });
      setProduct(sortDecrease);
    }
    else
    {
      return;
    }
  };
  const LinkImage = "http://127.0.0.1:8000/images/";
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
                          <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                              <Form.Label>Tùy chọn</Form.Label>
                              <Form.Control
                                as="select"
                                onChange={(e) => setSort(e.target.value)}
                                onClick={handleSort}
                              >
                                <option value="">Tùy chọn</option>
                                <option value="1">Giá từ thấp đến cao</option>
                                <option value="2">Giá từ cao đến thấp</option>
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 product-list">
                    <div className="row content-product-list">
                      {product.map((item, index) => (
                        <div
                          className="col-sm-4 col-xs-12 padding-none col-fix20"
                          key={index}
                        >
                          <div className="product-row">
                            <div className="product-row-img">
                              <Link to={`/ProductDetail/${item.id}`}>
                                <img
                                  src={LinkImage + item.AnhDaiDien}
                                  alt={item.AnhDaiDien}
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
                                  <del {...props}>{value}</del>
                                )}
                              />
                                <br />
                                
                                 <NumberFormat
                                value={item.GiaKM}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <span className="product-row-sale" {...props}>{value}</span>
                                )}
                              />
                              </div>
                              <div className="new-product-percent">{item.SoLuong ==0 ? "Hết hàng" :"Còn hàng"}</div>
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

import React from "react";
import "../../Body/Body.css";
import NumberFormat from "react-number-format";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function ProductDealinMonth(props) {
  const { products } = props;
  const linkImage = "http://127.0.0.1:8000/images/";
  return (
    <div
      className="ins-preview-wrapper ins-preview-wrapper-301"
      style={{ display: "block", visibility: "visible" }}
    >
      <div
        className="ins-web-smart-recommender-main-wrapper"
        style={{ display: "block" }}
      >
        <div className="ins-web-smart-recommender-header">
          <div
            id="wrap-text-1454703450633"
            className="ins-selectable-element ins-element-wrap ins-element-text"
          >
            <div
              id="text-1454703450633"
              className="ins-element-content ins-editable-text"
            >
              <div
                className="ins-editable ins-element-editable"
                id="editable-text-1454703450633"
                data-bind-menu="notification|text_editing"
              >
                <span className="hot-deal">
                  &nbsp; &nbsp;Deal Hot Trong Tháng
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ins-web-smart-recommender-body-wrapper ins-responsive-mode-active"
          style={{ width: "1280px" }}
        >
          <ul
            className="col-xl-12"
            data-current="0"
            style={{ transform: "translateX(0px)", width: "2560px" }}
          >
            {products.map((item) => (
              <li
                className="ins-web-smart-recommender-box-item"
                style={{ width: "240px" }}
              >
                <div
                  className="wrap-product-1454703450643"
                  className="ins-selectable-element ins-element-wrap ins-element-text"
                >
                  <div
                    className="product-1454703450643"
                    className="ins-element-content ins-editable-text"
                  >
                    <div className="editable-product-1454703450643">
                      <div className="ins-web-smart-recommender-inner-box">
                        <Link
                          to={`/ProductDetail/${item.id}`}
                          className="ins-product-box ins-element-link"
                        >
                          <div>
                            <img src={linkImage+item.AnhDaiDien} className="ins-image-box" alt={item.AnhDaiDien} />
                          </div>
                          <div
                            id="ins-description-box"
                            style={{ display: "block" }}
                            className="ins-product-name-container ins-selectable-element ins-element-wrap ins-element-text"
                          >
                            <div
                              id="text-1454703450644"
                              className="ins-element-content"
                            >
                              <div
                                className="ins-product-name"
                                style={{ textAlign: "center" }}
                              >
                                {item.TenSanPham}
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div
                          className="price-product-sale"
                          style={{ display: "block" }}
                        >
                          <div
                            className="product-sale"
                            style={{ display: "inline-block" }}
                          >
                            <p
                              className="ins-product-discount"
                              style={{ display: "inline-block" }}
                            >
                             
                              <NumberFormat
                                value={item.GiaCu}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <div {...props}>{value} </div>
                                )}
                              />
                            </p>
                          </div>
                        </div>
                        <div
                          className="price-product"
                          style={{ display: "block" }}
                        >
                          <div
                            className="price-products"
                            style={{ display: "inline-block" }}
                          >
                            <p
                              className="ins-product-price"
                              style={{ display: "inline-block" }}
                            >
                            
                              <NumberFormat
                                value={item.GiaKM}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <div {...props}>{value}</div>
                                )}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

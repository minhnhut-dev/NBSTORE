import React from "react";
import Header from "../../Component/Header/Header";
import "./ProductDetail.css";
function ProductDetail() {
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
      </div>
    </>
  );
}

export default ProductDetail;

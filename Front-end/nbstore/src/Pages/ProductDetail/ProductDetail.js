import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import "./ProductDetail.css";
function ProductDetail() {
  const [Product,SetProduct]=useState({
    Product:[
        {
            "id":"1",
            "title":"Nitro5",
            "src":[
              "//product.hstatic.net/1000026716/product/78tn_a29a4ed5ae4142e6ad3c3cd2fb28a8d2_large.png",
              "//product.hstatic.net/1000026716/product/khunglaptopwebsite_31yd_1679f22c67464f26a81ed10a8855d86e_large.jpg",
              "//product.hstatic.net/1000026716/product/khunglaptopwebsite_6393583de1934414a7a66bafc3f3c7ae_large.jpg"
            ],
            "description":"New",
            "Price":"1000$",
            "count":1
        }
    ]
  });
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
                            <div id="system-message">

                            </div>
                      </div>  
                      <div className="page_content">
                            <div className="row">
                                  <div className="col-sm-6 col-xs-12 product_thumbnail">
                                    </div>    
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

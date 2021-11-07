import React from 'react';
import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer"
import "./Promotion.css"
import {Link} from 'react-router-dom'
function Promotion(props) {
  return (
    <>
    <Header/>
      <div className="noindex">
          <div className="container" id="layout-page-main">
            <div className="content-page">
              <p>&nbsp;</p>
              <p style={{textAlign: 'center',color: "#ff0000"}}>
                  <strong>
                    <span style={{fontSize:"26px"}}>★</span>
                    &nbsp;
                    <span style={{fontSize:"26px"}}>TRANG TỔNG HỢP THÔNG TIN KHUYẾN MÃI GAMING GEAR  </span>
                    <span style={{fontSize:"26px"}}>★</span>
                    
                  </strong>
              </p>
              <p>&nbsp;</p>
              <p style={{textAlign: 'center',color: "#ff0000"}}>
                  <Link to="#" >
                      <img src="//file.hstatic.net/1000026716/file/banner_page_ad26f15e4df44b77a2b5f5f778319558.png" alt="km-1" style={{maxWidth:"100%"}}/>
                  </Link>
              </p>
              <p>&nbsp;</p>
              <p style={{textAlign: 'center',color: "#ff0000"}}>
                  <strong>
                    <span style={{fontSize:"26px"}}>★</span>
                    &nbsp;
                    <span style={{fontSize:"26px"}}>TRANG TỔNG HỢP THÔNG TIN KHUYẾN MÃI CHUỘT GAMING </span>
                    <span style={{fontSize:"26px"}}>★</span>
                    
                  </strong>
              </p>
              <p>&nbsp;</p>
              <p style={{textAlign: 'center',color: "#ff0000"}}>
                  <Link to="#" >
                      <img src="https://file.hstatic.net/1000026716/file/banner_fanpage_cover_177c054358e44aa28ba42238fef1ac94.jpg" alt="km-2" style={{maxWidth:"100%"}}/>
                  </Link>
              </p>
              <p>&nbsp;</p>
              <p style={{textAlign: 'center',color: "#ff0000"}}>
                  <strong>
                    <span style={{fontSize:"26px"}}>★</span>
                    &nbsp;
                    <span style={{fontSize:"26px"}}>TRANG TỔNG HỢP THÔNG TIN KHUYẾN MÃI TAI NGHE GAMING  </span>
                    <span style={{fontSize:"26px"}}>★</span>
                    
                  </strong>
              </p>
              <p>&nbsp;</p>
              <p style={{textAlign: 'center',color: "#ff0000"}}>
                  <Link to="#" >
                      <img src="https://file.hstatic.net/1000026716/file/file_goc_tai_nghe_fanpage_cover_2954b760a9974fbe9ad0ca18ed90fb5b.jpg" alt="km-3" style={{maxWidth:"100%"}}/>
                  </Link>
              </p>
            </div>
          </div>
      </div>
    <Footer/>
    </>
  );
}

export default Promotion;
import React, { useState } from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

 function Banner() {
  const [typeProduct, setTypeProduct] = useState([]);
  const [slides,setSlides]= useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/getAllTypeProduct")
      .then((response) => {
        setTypeProduct(response.data);
      });
      axios
      .get("http://127.0.0.1:8000/api/get-image-slides")
      .then((response) => {
        setSlides(response.data.images);
      });
  }, []);
  const linkImage = "http://127.0.0.1:8000/slides/";

  return (
    <>
      <div className="gearvn-header-navigation ">
        <div className="row gearvn-content-section gearvn-header-navigation-content padding-10-0 container">
          <div className="gearvn-header-menu">
            <div className="cat-menu gearvn-cat-menu">
              <nav id="megamenu-nav" className="megamenu-nav">
                <ol className="megamenu-nav-main">
                 {typeProduct.map((item, index)=>(
                       <li className="cat-menu-item " key={index}>
                       <Link className="gearvn-cat-menu-item" to={`/collections/${item.id}`}>
                         <div className="gearvn-cat-menu-icon" dangerouslySetInnerHTML={{__html:item.icon}}>
                         </div>
                         <span className="gearvn-cat-menu-name">{item.TenLoai}</span>
                       </Link>
                       {/* <div className="megamenu absolute-center level0 xlab_grid_container" style={{display:"none"}}>
                          <div className="column xlab_column_5_5">
                              <div className="sub-cat-item">
                                  <a className="sub-cat-item-name">Laptop Gaming theo thương hiệu</a>
                                  <a className="sub-cat-item-filter">Asus</a>
                                  <a className="sub-cat-item-filter">Asus</a>
                                  <a className="sub-cat-item-filter">Asus</a>
                                  <a className="sub-cat-item-filter">Asus</a>
                                  <a className="sub-cat-item-filter">Asus</a>

                              </div>
                          </div>
                       </div> */}
                     </li>
                 ))}
                </ol>
              </nav>
            </div>
          </div>
          <div className="gearvn-header-navigation-block">
            <div className="gearvn-header-banner">
              <div className="left">
                <div className="slider-wrap">
                  <Carousel>
                    {slides.map((slide, index) =>(
                      <Carousel.Item key={index}>
                        <img
                          className="d-block w-100"
                          src={linkImage+slide.image_name}
                          alt={slide.image_name}
                        />
                    </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
                <div className="sub-banner-wrap i100">
                  <a className="sub-item" href="#">
                    <img src="//theme.hstatic.net/1000026716/1000440777/14/solid4.jpg?v=19359" />
                  </a>
                  <a className="sub-item" href="#">
                    <img src="//theme.hstatic.net/1000026716/1000440777/14/solid5.jpg?v=19359" />
                  </a>
                </div>
              </div>
              <div className="right i100">
                <div className="sub-item-right">
                  <a className="sub-item" href="#">
                    <img src="//theme.hstatic.net/1000026716/1000440777/14/solid1.jpg?v=19359" />
                  </a>
                  <a className="sub-item" href="#">
                    <img src="//theme.hstatic.net/1000026716/1000440777/14/solid2.jpg?v=19359" />
                  </a>
                  <a className="sub-item" href="#">
                    <img src="//theme.hstatic.net/1000026716/1000440777/14/solid3.jpg?v=19359" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" gearvn-content-section i100 mb-10" id="xxx-banner">
        <div className="row row-margin-small">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-10 col-padding-small">
            <div className="border-rus">
              <a href="#">
                <img src="//theme.hstatic.net/1000026716/1000440777/14/xxxbanner1.jpg?v=19359" />
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-10 col-padding-small">
            <div className="border-rus">
              <a href="#">
                <img src="//theme.hstatic.net/1000026716/1000440777/14/xxxbanner2.jpg?v=19359" />
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-10 col-padding-small">
            <div className="border-rus">
              <a href="#">
                <img src="//theme.hstatic.net/1000026716/1000440777/14/xxxbanner3.jpg?v=19359" />
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-10 col-padding-small">
            <div className="border-rus">
              <a href="#">
                <img src="//theme.hstatic.net/1000026716/1000440777/14/xxxbanner4.jpg?v=19359" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default React.memo(Banner) ;
import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import logo from "../../assets/logo-nbstore.png";
import { Link,Redirect,useLocation } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import NumberFormat from "react-number-format";

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("cartItems") || "[]"
);

function Header() {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const [redirect, setRedirect]=useState(false);
  const [userLoged,setUserLoged]=useState({});
  useEffect(() => {
    const userLogin = JSON.parse(localStorage.getItem("userLogin") || "[]");
      setUserLoged(userLogin);
  },[]);
  const handleLogout = () => {
    window.location.reload();
    localStorage.removeItem("userLogin");
    localStorage.removeItem("accessToken");
  };
 
  const handleSearch = (e) =>{
    e.preventDefault();
      setRedirect(true);
  } 

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/getAllProduct").then((response) => {
      setOptions(response.data);
    });
  }, []);
  const LinkImage = "http://127.0.0.1:8000/images/";
  if(redirect)
  {
    return <Redirect to={`/search?kq=${search}`} />
  }
  return (
    <>
      <div className="fix-xxx">
        <div className="gearvn-top-banner-block">
          <Link to="/">
            <div className="gearvn-top-banner oktr"></div>
          </Link>
        </div>
        <div className="headerxxx">
          <div className="container gearvn-content-section">
            <div className="row">
              <div className="left_header" style={{ zIndex: 997 }}>
                <Link to="/">
                  <img src={logo} title="Logo" alt="NBSTORE" />
                </Link>
              </div>

              <div className="right_header">
                <div className=" pd5 fl1 ">
                  <div id="search">
                    <div className="search">
                      <form 
                        id="searchbox"
                        className="popup-content ultimate-search"
                        role="search"
                        onSubmit={handleSearch}
                      >
                        <input
                          value={search}
                          name="q"
                          type="text"
                          placeholder="Nh???p m?? ho???c t??n s???n ph???m....."
                          className="inputbox search-query"
                          onChange={(e) =>setSearch(e.target.value)}
                          onClick={()=>setDisplay(true)}
                          autoComplete="off"
                        />

                        <button
                          className="btn-search btn btn-link"
                          type="submit"
                          // onClick={handleSearch}
                        >
                          <span
                            className="fa fa-search"
                            aria-hidden="true"
                          ></span>
                        </button> 
                        {display && search &&
                        <div className="smart-search-wrapper search-wrapper">
                          {options.filter(({ TenSanPham }) => TenSanPham.toLowerCase().includes(search.toLowerCase()))
                          .map((v, i) => (
                            <div className="search-results" key={i}>
                              <Link to={`/ProductDetail/${v.id}`} className="thumbs" onClick={() =>setDisplay(false)}>
                                <img src={LinkImage + v.AnhDaiDien}  alt={v.TenSanPham}/>
                              </Link>
                              <Link to={`/ProductDetail/${v.id}`} onClick={() =>setDisplay(false)}>
                               {v.TenSanPham}
                                <NumberFormat
                                value={v.GiaKM}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VN??"}
                                renderText={(value, props) => (
                                  <span className="price-search" {...props}>{value}</span>
                                )}
                              />
                              </Link>
                            </div>
                          ))}
                        </div>}
                      </form>
                    </div>
                  </div>
                </div>
                <div className=" pdl0 fl1 ">
                  <div className="gearvn-right-top-block">
                    {userLoged.TenNguoidung !==undefined ? (
                      <div>
                        <Link
                          to="/account-order"
                          className="gearvn-header-top-item"
                        >
                          <img src={userLoged.Anh != null? userLoged.Anh: "//theme.hstatic.net/1000026716/1000440777/14/ak3.png?v=19349"} alt="avt-user" className="avt__user" />
                          <div className="header-right-description">
                            <div className="gearvn-text">
                              {userLoged.TenNguoidung}
                            </div>
                          </div>
                        </Link>
                        <Link to="/"
                          className="gearvn-header-top-item"
                          onClick={handleLogout}
                        >
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/ak2.png?v=19762" />
                          <div className="header-right-description">
                            <div className="gearvn-text">????ng xu???t</div>
                          </div>
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link to="/Register" className="gearvn-header-top-item">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/ak1.png?v=19349" />
                          <div className="header-right-description">
                            <div className="gearvn-text">????ng k??</div>
                          </div>
                        </Link>

                        <Link to="/Login" className="gearvn-header-top-item">
                          <img src="//theme.hstatic.net/1000026716/1000440777/14/ak3.png?v=19349" />
                          <div className="header-right-description">
                            <div className="gearvn-text">????ng nh???p</div>
                          </div>
                        </Link>
                      </div>
                    )}
                    <div>
                      <Link className="gearvn-header-top-item" to="/Promotion-information">
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/ak4.png?v=19349" />
                        <div className="header-right-description">
                          <div className="gearvn-text">Khuy???n m??i</div>
                        </div>
                        </Link>
                      <Link to="/cart" className="gearvn-header-top-item rela">
                        <div>
                          <Badge variant="danger">
                            {cartFromLocalStorage.length}
                          </Badge>
                        </div>
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/ak5.png?v=19349" />
                        <div className="header-right-description">
                          <div className="gearvn-text">Gi??? h??ng</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="gearvn-info-top">
                  <ul>
                    <li>
                      <span>
                        <a href="#" style={{ color: "#ea1c00" }}>
                          H??? th???ng Showroom t???i TP. H??? Ch?? Minh - H?? N???i
                        </a>
                      </span>
                    </li>
                    <li>
                      <img src="//theme.hstatic.net/1000026716/1000440777/14/hotcall.svg?v=19349" />
                      <span>
                        <a href="#" style={{ color: "#ea1c00" }}>
                          T???ng ????i
                        </a>
                      </span>
                    </li>
                    <li>
                      <img src="//theme.hstatic.net/1000026716/1000440777/14/youtube.png?v=19349" />
                      <span>
                        <a href="#" style={{ color: "#ea1c00" }}>
                          Video
                        </a>
                      </span>
                    </li>
                    <li>
                      <img src="//theme.hstatic.net/1000026716/1000440777/14/gNewsFavIco.png?v=19349" />
                      <span>
                        <Link to="/buildPC" style={{ color: "#ea1c00" }}>
                          X??y d???ng c???u h??nh
                        </Link>
                      </span>
                    </li>
                    <li>
                      <img src="//theme.hstatic.net/1000026716/1000440777/14/logo_hr.png?v=19349" />
                      <span>
                        <a href="#" style={{ color: "#ea1c00" }}>
                          Li??n h???
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gearvn-content-section padding-10-0 hidden-xs hidden-sm container">
          <div className="content-flex top-header-bar">
          <Link to="/Product-Portffolio">
              <span className="style-nav-fix hidden">
                <i className="fa fa-bars"></i>
                Danh m???c s???n ph???m
              </span>
            </Link>
            <div className="gearvn-header-navigation-right content-flex">
              <a className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                <div className="xxxkt">
                  <img src="//theme.hstatic.net/1000026716/1000440777/14/xk1s.png?v=19349" />

                  <img src="//theme.hstatic.net/1000026716/1000440777/14/xk1s.png?v=19349" />
                </div>
                T???ng h???p Khuy???n m??i
              </a>
              
              <Link to="/PaymentGuide" className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                <div className="xxxkt">
                    <img src="//theme.hstatic.net/1000026716/1000440777/14/xk2.png?v=19349" />

                    <img src="//theme.hstatic.net/1000026716/1000440777/14/xk2.png?v=19349" />
                  </div>
                H?????ng d???n thanh to??n
              </Link>
              <a className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                <div className="xxxkt">
                  <img src="//theme.hstatic.net/1000026716/1000440777/14/xk2.png?v=19349" />

                  <img src="//theme.hstatic.net/1000026716/1000440777/14/xk2.png?v=19349" />
                </div>
                H?????ng d???n tr??? g??p
              </a>
              <a className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                <div className="xxxkt">
                  <img src="//theme.hstatic.net/1000026716/1000440777/14/xk4.png?v=19349" />

                  <img src="//theme.hstatic.net/1000026716/1000440777/14/xk4.png?v=19349" />
                </div>
                Ch??nh s??ch b???o h??nh
              </a>
              <a className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                <div className="xxxkt">
                  <img src="//theme.hstatic.net/1000026716/1000440777/14/xk5.png?v=19349" />

                  <img src="//theme.hstatic.net/1000026716/1000440777/14/xk5.png?v=19349" />
                </div>
                Ch??nh S??ch V???n Chuy???n
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default React.memo(Header) ;
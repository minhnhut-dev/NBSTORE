import "bootstrap/dist/css/bootstrap.min.css";
import bannertop from "../../assets/bannertop.png";
import logo from "../../assets/logo_update1.png";
import "./Header.css";
export default function Header (){
    return (
<header>
      {/**BannerTop */}
      <div className="header-banner">
        <div className="container position-relative">
          <a href="#" className="d-block text-center">
            <img src={bannertop} alt="banenrtop" />
          </a>
        </div>
      </div>

      <div className="header-text-top">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between text-13">
            <div className="address-left clearfix">
              <div className="pulse-icon">
                <div className="icon-wrap"></div>
                <div className="elements">
                  <div className="pulse pulse-1"></div>
                </div>
              </div>
              <p className="m-0 float-left">
                  <marquee>
                 　TPHCM: 2174 Huỳnh Tấn Phát, huyện Nhà Bè, Tp.HCM
                  </marquee>
              </p>
            </div>
            <div className="text-title">
                <a href="#" className="map-title">
                   <i className="fas fa-map-marker-alt text-16 pr-2" aria-hidden="true"></i>
                   Hệ thống showroom
                </a>
                <a className="icon-video current" href="#">
                   <i className="fas fa-play-circle text-16 pr-2"></i>
                   Video
                </a>
                <a className="icon-news" href="#">
                  <i className="fas fa-newspaper text-16 pr-2"></i>
                    Tin tức
                </a>

                <a className="icon-print" href="#">
                <i className="fas fa-print text-16 pr-2"></i>                   
                 In hóa đơn điện tử
                </a>
            </div>
          </div>
        </div>
      </div>
      {/** Logo */}
      <div className="header-main-container">
          <div className="container">
              <div className="d-flex flex-wrap align-items-center header-main">
                  <h1 className="m-0">
                      <a href="#" className="logo current">
                        <img src={logo} className="logo-img" alt="Logo"/>
                      </a>  
                  </h1>
                  {/** Search */}
                  <div className="header-search">
                      <form method="GET" encType="multipart/form-data" className="clearfix search-form bg-white">
                          <select name="scat_id">
                              <option value>Tất cả danh mục</option>
                          </select>
                          <div className="searh-form-container">
                            <input type="text" className="text_search" placeholder="Tìm kiếm sản phẩm...." autoComplete="off"  name="search"/>
                            <button type="submit" className="submit-search">
                                  <i className="fas fa-search"></i>
                                  Tìm kiếm
                            </button>
                          </div>
                      </form>
                  </div>  
                  {/**icon right */}
                  <div className="header-icon-right d-flex align-items-center justify-content-between">
                        <div className="item clearfix">
                            <a className="header-icon-phone" title="Mua hàng online">
                                <i className="icon icon-phone"></i>                
                                <p className="icon-text m-0">
                                    <span className="text-12 d-block">Mua hàng online</span>
                                    <b className="text-16 d-block">1900 8198</b>
                                </p>
                             </a>
                             <a href="#" title="Hệ thống showroom" className="header-item-showroom">
                                  <i className="icon icon-showroom"></i>
                                  <p className="icon-text m-0">
                                    <span className="text-12 d-block">Hệ thống</span>
                                    <b>Showroom</b>
                                  </p>
                             </a>
                        </div>
                        <div className="item clearfix">
                            <a href="#" title="Xây dựng cấu hình">
                              <i className="icon icon-buildpc"></i>
                              <p className="icon-text m-0 text-12">
                                Xây dựng
                                <br/>
                                Cấu hình PC
                              </p>
                            </a>
                        </div>
                        {/** item user */}
                        <div className="item clearfix">
                              <a title="Tài khoản" href="#">
                                  <i className="icon icon-user"></i>
                              </a>
                              <div className="icon-text m-0 text-12">
                                  <a href="#" className="d-block">Đăng ký</a>
                                  <a href="#" className="d-block">Đăng nhập</a>
                              </div>
                        </div>  
                        {/** end item user */}
                        
                        {/**item cart */}
                        <div className="item clearfix">
                            <a href="#" className="d-block position-relative" title="Giỏ hàng">
                              <i className="icon icon-cart mr-0"></i>
                              <span className="js-cart-count cart-count">0</span>
                            </a>
                        </div>
                        {/** end item cart */}
                  </div>
                  {/** menu */}
                  <div className="header-menu d-flex align-items-center">
                      <div className="header-menu-container">
                          <a href="#" className="d-block font-weight-light text-white menu-title" style={{fontSize:"15px"}} >
                             <i class="fa fa-bars"></i>
                             Danh mục sản phẩm
                          </a>
                          {/** item danh mục */}
                          {/* <div className="header-menu-holder">
                                <div className="item">
                                    <a href="#" className="pro-cate-1">
                                      <span className="cat-thumb-item" style={{width:"35px",textAlign:"center"}}>
                                          <img src={Laptop} alt="Máy tính xách tay- Laptop" />
                                      </span>
                                      <span className="title" title="Máy tính xách tay">Máy tính xách tay - Laptop</span>
                                    </a>
                                    <div className="sub-menu" >
                                        <div className="cat-child-holder">
                                            <div className="cat-child-items">
                                                <a href="#" className="cate-2" title="Laptop theo hãng">Laptop theo hãng</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                          </div> */}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </header>
    );
}

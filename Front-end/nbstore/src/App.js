import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bannertop from "./assets/bannertop.jpg";
import logo from "./assets/logo_update.png";
function App() {
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
                            <input type="text" className="text_search" placeholder="Tìm kiếm sản phẩm...." autoComplete="off"></input>
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
                        </div>
                  </div>
              </div>
          </div>
      </div>
    </header>
  );
}
export default App;

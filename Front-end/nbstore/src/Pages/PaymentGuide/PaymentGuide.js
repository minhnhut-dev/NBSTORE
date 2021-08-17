import React from "react";
import "./PaymentGuide.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-nbstore.png";
import PaymentMOMO from "../../assets/paymentMoMo.PNG";
function PaymentGuide() {
  return (
    <>
      <div className="ladi-wraper">
        <div id="SECTION1" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <Link to="/" id="IMAGE120" className="ladi-element">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div id="SECTION2" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="IMAGE128" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="HEADLINE126" className="ladi-element">
              <h3 className="ladi-headline">HƯỚNG DẪN THANH TOÁN</h3>
            </div>
            <div id="HEADLINE127" className="ladi-element">
              <h3 className="ladi-headline">KHI MUA HÀNG TẠI NBSTORE</h3>
            </div>
          </div>
        </div>
        <div id="SECTION130" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div className="ladi-element" id="FRAME350">
              <div className="ladi-frame ladi-transition">
                <div className="ladi-frame-background">
                  <div id="HEADLINE136" className="ladi-element">
                    <h3 className="ladi-headline">
                      Thanh Toán
                      <br />
                      khi nhận hàng
                    </h3>
                  </div>
                  <div id="HEADLINE137" className="ladi-element">
                    <h3 className="ladi-headline">
                      Quý khách hàng có thể đặt hàng trên website rồi sẽ gửi
                      hàng cho các bạn
                    </h3>
                  </div>
                  <div id="IMAGE434" className="ladi-element">
                    <div className="ladi-image">
                      <div className="ladi-image-background"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ladi-element" id="FRAME351">
              <div className="ladi-frame ladi-transition">
                <div className="ladi-frame-background">
                  <div id="HEADLINE136" className="ladi-element">
                    <h3 className="ladi-headline">
                      Thanh Toán
                      <br />
                      qua MoMo
                    </h3>
                  </div>
                  <div id="HEADLINE356" className="ladi-element">
                    <h3 className="ladi-headline">
                      Hãy mở Ví MoMo của bạn quét mã QR để hoàn tất việc đặt
                      hàng.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="ladi-element" id="FRAME354">
              <div className="ladi-frame ladi-transition">
                <div className="ladi-frame-background">
                  <div id="HEADLINE355" className="ladi-element">
                    <h3 className="ladi-headline">
                      Thanh Toán
                      <br />
                      Paypal
                    </h3>
                  </div>
                  <div id="HEADLINE357" className="ladi-element">
                    <h3 className="ladi-headline">
                      Quý khách hàng hãy đăng nhập ví Paypal để thanh toán.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="ladi-element" id="FRAME523">
              <div className="ladi-frame ladi-transition">
                <div className="ladi-frame-background">
                  <div id="HEADLINE524" className="ladi-element">
                    <h3 className="ladi-headline">
                      Thanh Toán
                      <br />
                      VNpay
                    </h3>
                  </div>
                  <div id="HEADLINE525" className="ladi-element">
                    <h3 className="ladi-headline">
                      Quý khách hàng hãy đăng nhập VNpay để thanh toán.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="SECTION456" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="BOX459" className="ladi-element">
              <div className="ladi-box"></div>
            </div>
            <div id="HEADLINE457" className="ladi-element">
                <h3 className="ladi-headline">
                Sau khi chọn hình thức thanh toán qua Ví MoMo, hệ thống chuyển sang giao diện thanh toán của MoMo.
                </h3>
            </div>
            <div id="IMAGE461" className="ladi-element">
                <div className="ladi-image">
                    <div className="ladi-image-background">

                    </div>
                </div>
            </div>
            <div id="IMAGE487" className="ladi-element">
                <div className="ladi-image">
                    <div className="ladi-image-background">

                    </div>
                </div>
            </div>
            <div id="HEADLINE488" className="ladi-element">
                <h3 className="ladi-headline">
                Hãy mở Ví MoMo của bạn quét mã QR trên để hoàn tất việc đặt hàng.
                <br/>
                Vậy là bạn đã hoàn thành một bước mua hàng online tại 
                <span style={{color: 'red'}}> NBSTORE </span>
                một cách dể dàng và tiện lợi chưa đến 2 phút.
                </h3>
            </div>
            <div id="HEADLINE460" className="ladi-element">
                <h3 className="ladi-headline">
                THANH TOÁN 
                <span style={{color:"red"}}> VÍ ĐIỆN TỬ MOMO</span>
                </h3>
            </div> 
          </div>
        </div>

        <div id="SECTION489" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="BOX490" className="ladi-element">
              <div className="ladi-box"></div>
            </div>
            <div id="HEADLINE492" className="ladi-element">
                <h3 className="ladi-headline">
                Sau khi chọn hình thức thanh toán qua ứng dụng Paypal, hệ thống chuyển sang giao diện thanh toán của VNPay.
                </h3>
            </div>
            <div id="IMAGE493" className="ladi-element">
                <div className="ladi-image">
                    <div className="ladi-image-background">

                    </div>
                </div>
            </div>
            <div id="IMAGE494" className="ladi-element">
                <div className="ladi-image">
                    <div className="ladi-image-background">

                    </div>
                </div>
            </div>
            <div id="HEADLINE488" className="ladi-element">
                <h3 className="ladi-headline">
                Hãy đăng nhập VNpay trên để hoàn tất việc đặt hàng.
                <br/>
                Vậy là bạn đã hoàn thành một bước mua hàng online tại 
                <span style={{color: 'red'}}> NBSTORE </span>
                một cách dể dàng và tiện lợi chưa đến 2 phút.
                </h3>
            </div>
            <div id="HEADLINE460" className="ladi-element">
                <h3 className="ladi-headline">
                THANH TOÁN 
                <span style={{color:"red"}}> VNPAY</span>
                </h3>
            </div> 
          </div>
        </div>

        <div id="SECTION489" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="BOX490" className="ladi-element">
              <div className="ladi-box"></div>
            </div>
            <div id="HEADLINE492" className="ladi-element">
                <h3 className="ladi-headline">
                Sau khi chọn hình thức thanh toán qua ứng dụng Paypal, hệ thống chuyển sang giao diện thanh toán của Paypal.
                </h3>
            </div>
            <div id="IMAGE493" className="ladi-element">
                <div className="ladi-image">
                    <div className="ladi-image-background">

                    </div>
                </div>
            </div>
            <div id="IMAGE477" className="ladi-element" >
                <div className="ladi-image">
                    <div className="ladi-image-background">

                    </div>
                </div>
            </div>
            <div id="HEADLINE488" className="ladi-element">
                <h3 className="ladi-headline">
                Hãy đăng nhập Paypal trên để hoàn tất việc đặt hàng.
                <br/>
                Vậy là bạn đã hoàn thành một bước mua hàng online tại 
                <span style={{color: 'red'}}> NBSTORE </span>
                một cách dể dàng và tiện lợi chưa đến 2 phút.
                </h3>
            </div>
            <div id="HEADLINE460" className="ladi-element">
                <h3 className="ladi-headline">
                THANH TOÁN 
                <span style={{color:"red"}}> Paypal</span>
                </h3>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentGuide;

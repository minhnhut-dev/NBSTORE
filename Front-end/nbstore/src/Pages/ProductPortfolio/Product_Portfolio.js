import React from "react";
import "./Product_Portfolio.css";
import Logo from "../../assets/logo-nbstore.png";
import { Link } from "react-router-dom";
function Product_Portfolio() {
  return (
    <>
      <div className="ladi-wraper">
        <div id="SECTION4" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <Link to="/" id="IMAGE120" className="ladi-element">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div id="SECTION63" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="IMAGE65" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE64" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="SECTION68" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container"></div>
        </div>
        <div id="SECTION67" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-overlay"></div>
          <div className="ladi-container">
            <div id="IMAGE69" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE70" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE74" className="ladi-element">
                  <Link to="/collections/2">
                    <img src="https://w.ladicdn.com/s600x600/5bf3dc7edc60303c34e4991f/lp-final-49-20210806144620.png" alt="img-74" className="ladi-image-background"/>
                  </Link>
            </div>
            <div id="IMAGE77" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE78" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE79" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE80" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE75" className="ladi-element">
                <Link to="/collections/1">
                    <img src="https://w.ladicdn.com/s600x600/5bf3dc7edc60303c34e4991f/lp-final-50-20210806144620.png" className="ladi-image-background" alt="img-75"/>
                </Link>
            </div>
            <div id="IMAGE76" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product_Portfolio;

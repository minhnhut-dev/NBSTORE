import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./BuildConfig.css";
import { Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import axios from "axios";
function BuildConfig() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/getAccessories")
    .then((response) => {
      setAccessories(response.data);
    });
  }, []);

  const handleShowAccessories= (data) => {
      console.log("handle accessories: ",data);
      setShow(true);
  }
  return (
    <>
      <Header />
      <div className="noindex">
        <div className="container" style={{ background: "white" }}>
          <div className="buildpc-banner-container mb-4">
            <Carousel indicators={false} autoPlay={true}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://anphat.com.vn/media/banner/03_Jun4d2a3f9e05a69b5026211044312f2f32.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://anphat.com.vn/media/banner/03_Jun4d2a3f9e05a69b5026211044312f2f32.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://anphat.com.vn/media/banner/03_Jun4d2a3f9e05a69b5026211044312f2f32.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            <div id="build-pc-function">
              <div className="build-pc-header">
                <div className="left-content">
                  <Button variant="danger" className="re-build">
                    <i className="fas fa-sync"></i>
                    Xây dựng lại
                  </Button>
                </div>
                <div className="right-content">
                  <span>
                    Chi phí dự tính:
                    <strong>0đ</strong>
                  </span>
                </div>
              </div>
              <div className="build-pc-body">
                {accessories.map((item, index) => (
                  <div className="product-type-item">
                    <div className="left-content">{index++}. {item.TenLoai}</div>
                    <div className="right-content">
                      <Button
                        variant="danger"
                        className="choose-product"
                        onClick={()=> handleShowAccessories(item)}
                      >
                        <i className="fas fa-plus"></i>
                        {item.TenLoai}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="build-pc-footer">
                <div className="btn-item">
                  <Button className="btn btnSaving">
                    <i className="fas fa-images"></i>
                    Tải ảnh cấu hình
                  </Button>
                </div>
                <div className="btn-item">
                  <Button className="btn btnShare">
                    <i className="fab fa-facebook-f"></i>
                    Chia sẻ cấu hình
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title as="h2" className="header-title">
            Chọn linh kiện
          </Modal.Title>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Tìm kiếm sản phẩm"
              aria-label="Tìm kiếm sản phẩm"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <i className="fas fa-times" onClick={handleClose}></i>
        </Modal.Header>
        <Modal.Body>
          <div className="list-product-modal">
            <div className="list-product-header">
              <span>
                Trang
                <strong>1</strong>/<strong>33</strong>
              </span>
              <Button className="btn-prev">
                <i className="fas fa-backward"></i>
              </Button>
              <input
                className="input-paging"
                type="number"
                disabled
                value="1"
              />
              <Button className="btn-next">
                <i className="fas fa-forward"></i>
              </Button>
            </div>
            <div className="list-product-data">
              <div className="modal-product-detail">
                <div className="image">
                  <img src="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/06/MB_GG_WRX80-SU8-IPMI-365x365.jpg" />
                </div>
                <div className="content">
                  <a
                    href="https://tinhocngoisao.com/mainboard-gigabyte-wrx80-su8-ipmi"
                    target="_blank"
                  >
                    <p className="name">Mainboard Gigabyte WRX80-SU8-IPMI</p>
                    <p className="price">Giá: 19,500,000 đ</p>
                    <p className="productid">Mã sản phẩm: SP1234</p>
                  </a>
                  <Button className="add-to-build">Chọn</Button>
                </div>
              </div>
              <div className="modal-product-detail">
                <div className="image">
                  <img src="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/06/MB_GG_WRX80-SU8-IPMI-365x365.jpg" />
                </div>
                <div className="content">
                  <a
                    href="https://tinhocngoisao.com/mainboard-gigabyte-wrx80-su8-ipmi"
                    target="_blank"
                  >
                    <p className="name">Mainboard Gigabyte WRX80-SU8-IPMI</p>
                    <p className="price">Giá: 19,500,000 đ</p>
                    <p className="productid">Mã sản phẩm: SP1234</p>
                  </a>
                  <Button className="add-to-build">Chọn</Button>
                </div>
              </div>
              <div className="modal-product-detail">
                <div className="image">
                  <img src="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/06/MB_GG_WRX80-SU8-IPMI-365x365.jpg" />
                </div>
                <div className="content">
                  <a
                    href="https://tinhocngoisao.com/mainboard-gigabyte-wrx80-su8-ipmi"
                    target="_blank"
                  >
                    <p className="name">Mainboard Gigabyte WRX80-SU8-IPMI</p>
                    <p className="price">Giá: 19,500,000 đ</p>
                    <p className="productid">Mã sản phẩm: SP1234</p>
                  </a>
                  <Button className="add-to-build">Chọn</Button>
                </div>
              </div>
              <div className="modal-product-detail">
                <div className="image">
                  <img src="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/06/MB_GG_WRX80-SU8-IPMI-365x365.jpg" />
                </div>
                <div className="content">
                  <a
                    href="https://tinhocngoisao.com/mainboard-gigabyte-wrx80-su8-ipmi"
                    target="_blank"
                  >
                    <p className="name">Mainboard Gigabyte WRX80-SU8-IPMI</p>
                    <p className="price">Giá: 19,500,000 đ</p>
                    <p className="productid">Mã sản phẩm: SP1234</p>
                  </a>
                  <Button className="add-to-build">Chọn</Button>
                </div>
              </div>
              <div className="modal-product-detail">
                <div className="image">
                  <img src="https://tinhocngoisao.cdn.vccloud.vn/wp-content/uploads/2021/06/MB_GG_WRX80-SU8-IPMI-365x365.jpg" />
                </div>
                <div className="content">
                  <a
                    href="https://tinhocngoisao.com/mainboard-gigabyte-wrx80-su8-ipmi"
                    target="_blank"
                  >
                    <p className="name">Mainboard Gigabyte WRX80-SU8-IPMI</p>
                    <p className="price">Giá: 19,500,000 đ</p>
                    <p className="productid">Mã sản phẩm: SP1234</p>
                  </a>
                  <Button className="add-to-build">Chọn</Button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
}

export default BuildConfig;

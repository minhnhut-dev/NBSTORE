import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./BuildConfig.css";
import { Carousel } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
function BuildConfig() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                  {/* <button className="re-build">
                          <i className="fas fa-sync"></i>
                          </button> */}
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
                <div className="product-type-item">
                  <div className="left-content">1. Bo mạch chủ</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>
                      Bo mạch chủ
                    </Button>
                  </div>
                </div>
                <div className="product-type-item">
                  <div className="left-content">2. Vi xử lý</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>
                      Vi xử lý
                    </Button>
                  </div>
                </div>
                <div className="product-type-item">
                  <div className="left-content">3. Ram</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>
                      Ram
                    </Button>
                  </div>
                </div>
                <div className="product-type-item">
                  <div className="left-content">4. Ổ cứng SSD</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>Ổ cứng SSD
                    </Button>
                  </div>
                </div>
                <div className="product-type-item">
                  <div className="left-content">5. Ổ cứng HDD</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>Ổ cứng HDD
                    </Button>
                  </div>
                </div>
                <div className="product-type-item">
                  <div className="left-content">6. Nguồn</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>
                      Nguồn
                    </Button>
                  </div>
                </div>
                <div className="product-type-item">
                  <div className="left-content">7. VGA</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>
                      VGA
                    </Button>
                  </div>
                </div>
                <div className="product-type-item">
                  <div className="left-content">8. Case</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>
                      Case
                    </Button>
                  </div>
                </div>
                <div className="product-type-item">
                  <div className="left-content">9. Màn hình</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>
                      Màn hình
                    </Button>
                  </div>
                </div>
                <div className="product-type-item">
                  <div className="left-content">10. Tản nhiệt</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>
                      Tản nhiệt
                    </Button>
                  </div>
                </div>
                <div className="product-type-item">
                  <div className="left-content">11. Bàn phím</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>
                      Bàn phím
                    </Button>
                  </div>
                </div>
                <div className="product-type-item">
                  <div className="left-content">12. Chuột</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>
                      Chuột
                    </Button>
                  </div>
                </div>
                <div className="product-type-item">
                  <div className="left-content">13. Tai nghe</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>
                      Tai nghe
                    </Button>
                  </div>
                </div>
                <div className="product-type-item">
                  <div className="left-content">14. Fan</div>
                  <div className="right-content">
                    <Button
                      variant="danger"
                      className="choose-product"
                      onClick={handleShow}
                    >
                      <i className="fas fa-plus"></i>
                      Fan
                    </Button>
                  </div>
                </div>
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
          {/* <div className="filter-attri">
            <div className="filter-attr-items-rect"></div>
            <div className="list-attributes">
              <Accordion className="attribute-item" >
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0" className="header-attr-name">
                  <h4> Thương hiệu</h4>
                  <i className="fas fa-caret-down"></i>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" className="body-attr-value">
                    <Card.Body className="input-group">Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
                
              </Accordion>
            </div>
          </div> */}
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
                        <a href="https://tinhocngoisao.com/mainboard-gigabyte-wrx80-su8-ipmi" target="_blank">
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
                        <a href="https://tinhocngoisao.com/mainboard-gigabyte-wrx80-su8-ipmi" target="_blank">
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
                        <a href="https://tinhocngoisao.com/mainboard-gigabyte-wrx80-su8-ipmi" target="_blank">
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
                        <a href="https://tinhocngoisao.com/mainboard-gigabyte-wrx80-su8-ipmi" target="_blank">
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
                        <a href="https://tinhocngoisao.com/mainboard-gigabyte-wrx80-su8-ipmi" target="_blank">
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
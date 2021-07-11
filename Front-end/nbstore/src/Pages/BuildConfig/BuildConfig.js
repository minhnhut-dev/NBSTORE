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
import NumberFormat from "react-number-format";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const buildConfig = JSON.parse(
  localStorage.getItem("BuildConfig") || "[]"
);
function BuildConfig() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [accessories, setAccessories] = useState([]);
  const [idConfig, setIdConfig] = useState("");
  const [cpu,setCPU] = useState([]);
  const [ram,setRAM] = useState([]);
  const [config,setConfig] = useState({
      cpu:buildConfig.cpu,
      ram:{qty:1},
      main:{qty:1},
      hdd:{qty:1},
      vga:{qty:1},
      monitor:{qty:1},
      keyboard:{qty:1},
      nguon:{qty:1},
      case:{qty:1},
      cooler:{qty:1},
      fan:{qty:1},
      tainghe:{qty:1},

  })
  localStorage.setItem("BuildConfig", JSON.stringify(config));
  // const newData={"SoLuong":1};
  // console.log('CPU',config.cpu={...config.cpu,...newData});
 
  const handleShowAccessories = (data) => {
   setIdConfig(data.id);
   axios.get(`http://127.0.0.1:8000/api/getProductByTypeProductId/${data.id}`)
   .then((response)=>{
     setAccessories(response.data);
   })
    setShow(true);
   
  };
  
  const getTypeCPU=()=>
  {
    axios.get('http://127.0.0.1:8000/api/typeCPU')
    .then((response)=>{
      setCPU(response.data);
    })
  }
  const getTypeRAM=()=>
  {
    axios.get('http://127.0.0.1:8000/api/typeRAM')
    .then((response)=>{
      setRAM(response.data);
    })
  }

  useEffect(() => {
     getTypeCPU();
     getTypeRAM();

  },[])
  const handleAddAccessories=(data)=>{
    if(data.loai_san_phams_id==6)
    {
      console.log(data);
      config.cpu={...config.cpu,...data,qty:1};
    }
    else
    {
      console.log('không phai cpu');
    }
      
  }
  
  const LinkImage = "http://127.0.0.1:8000/images/";
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
               
                  {/* CPU */}
                 {cpu.map((item, index)=>(
                    <div className="product-type-item" key={index}>
                    <div className="left-content">
                        1. {item.TenLoai}
                    </div>
                    <div className="right-content">
                      <Button
                        variant="danger"
                        className="choose-product"
                        onClick={()=>handleShowAccessories(item)}
                      >
                        <i className="fas fa-plus"></i>
                        {item.TenLoai}
                      
                      </Button>
                      
                    </div>
                  </div>
                 ))}
               {ram.map((item, index)=>(
                    <div className="product-type-item" key={index}>
                    <div className="left-content">
                        2. {item.TenLoai}
                    </div>
                    <div className="right-content">
                      <Button
                        variant="danger"
                        className="choose-product"
                        onClick={()=>handleShowAccessories(item)}
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
        id={`CH${idConfig}`}
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
              {accessories.map((item, index) => (
                <div className="modal-product-detail" key={index}>
                  <div className="image">
                    <img src={LinkImage + item.AnhDaiDien} alt="AnhDaiDien"/>
                  </div>
                  <div className="content">
                    <Link to={`/ProductDetail/${item.id}`} target="_blank">
                      <p className="name">{item.TenSanPham}</p>
                      {/* <p className="price">{item.GiaKM}</p> */}
                      <p className="productid">Mã sản phẩm: SP{item.id}</p>
                      <NumberFormat
                        value={item.GiaKM}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" VNĐ"}
                        renderText={(value, props) => (
                          <p className="price" {...props}>{value}</p>
                        )}
                      />
                    </Link>
                    <Button className="add-to-build" onClick={()=>handleAddAccessories(item)}>Chọn</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Footer />
    </>
  );
}

export default BuildConfig;

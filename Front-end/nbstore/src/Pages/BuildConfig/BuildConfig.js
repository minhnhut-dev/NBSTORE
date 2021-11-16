import React, { useEffect, useState, useRef, useMemo } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./BuildConfig.css";
import { Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import ReactToPrint from "react-to-print";
import axios from "axios";
import NumberFormat from "react-number-format";
import { exportComponentAsPNG } from "react-component-export-image";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
const buildConfig = JSON.parse(localStorage.getItem("BuildConfig") || "[]");
function BuildConfig() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [loading, setLoading] = useState(true);

  const [accessories, setAccessories] = useState([]); // list accessories
  const [idConfig, setIdConfig] = useState("");
  const [typecpu, setTypeCPU] = useState([]); //set type product is cpu
  const [typeram, setTypeRAM] = useState([]); //set type product is ram
  const [typemain, setTypeMain] = useState([]); //set type product is mainboard
  const [typemonitor, setTypeMonitor] = useState([]); //set type product is monitor
  const [typestorage, setTypeStorage] = useState([]); //set type product is storage
  const [typepower, setTypePower] = useState([]); //set type product is Power
  const [typevga, setTypeVGA] = useState([]); //set type product is VGA
  const [typecooler, setTypeCooler] = useState([]); //set type product is Cooler

  const [qtyCPU, setQtyCPU] = useState(1); // quantity cpu
  const [qtyRAM, setQtyRam] = useState(1); // quantity ram
  const [qtyMain, setQtyMain] = useState(1); // quantity ram
  const [qtyMonitor, setQtyMonitor] = useState(1); // quantity monitor
  const [qtyStorage, setQtyStorage] = useState(1); // quantity Storage
  const [qtyPower, setQtyPower] = useState(1); // quantity Power
  const [qtyVGA, setQtyVGA] = useState(1); // quantity VGA
  const [qtyCooler, setQtyCooler] = useState(1); // quantity Cooler
  const [keyword, setKeyword] = useState(""); // keyword
  const [page,setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  let today = new Date().toLocaleDateString();
  const componentRef = useRef();
  const [config, setConfig] = useState({
    cpu: buildConfig.cpu,
    ram: buildConfig.ram,
    main: buildConfig.main,
    monitor: buildConfig.monitor,
    storage: buildConfig.storage,
    power: buildConfig.power,
    vga: buildConfig.vga,
    cooler: buildConfig.cooler,
  });

  const priceCPU = config.cpu === undefined ? 0 : qtyCPU * config.cpu.GiaKM;
  const priceRAM = config.ram === undefined ? 0 : qtyRAM * config.ram.GiaKM;
  const priceMain = config.main === undefined ? 0 : qtyMain * config.main.GiaKM;
  const priceMonitor =
    config.monitor === undefined ? 0 : qtyMonitor * config.monitor.GiaKM;
  const priceStorage =
    config.storage === undefined ? 0 : qtyStorage * config.storage.GiaKM;
  const pricePower =
    config.power === undefined ? 0 : qtyPower * config.power.GiaKM;
  const priceVGA = config.vga === undefined ? 0 : qtyVGA * config.vga.GiaKM;
  const priceCooler =
    config.cooler === undefined ? 0 : qtyCooler * config.cooler.GiaKM;

  const totalPrice =
    priceCPU +
    priceRAM +
    priceMain +
    priceMonitor +
    priceStorage +
    pricePower +
    priceVGA +
    priceCooler;

  localStorage.setItem("BuildConfig", JSON.stringify(config)); //set localStorage buildConfig

  const handleShowAccessories = (data) => {
    setIdConfig(data.id);
    axios
      .get(`http://127.0.0.1:8000/api/getProductByTypeProductId/${data.id}?page=${page}`)
      .then((response) => {
        setAccessories(response.data.data);
        setTotalPage(response.data.last_page);
      });
    setShow(true);
  };
useEffect(() => {
  axios
      .get(`http://127.0.0.1:8000/api/getProductByTypeProductId/${idConfig}?page=${page}`)
      .then((response) => {
        setAccessories(response.data.data);
        setTotalPage(response.data.last_page);
      });
}, [page])
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/typeCPU").then((response) => {
      setTypeCPU(response.data);
      setLoading(false);
    });

    axios.get("http://127.0.0.1:8000/api/typeRAM").then((response) => {
      setTypeRAM(response.data);
      setLoading(false);
    });
    axios.get("http://127.0.0.1:8000/api/typeMainBoard").then((response) => {
      setTypeMain(response.data);
      setLoading(false);
    });
    axios.get("http://127.0.0.1:8000/api/typeMonitor").then((response) => {
      setTypeMonitor(response.data);
      setLoading(false);
    });
    axios.get("http://127.0.0.1:8000/api/typeStorage").then((response) => {
      setTypeStorage(response.data);
      setLoading(false);
    });
    axios.get("http://127.0.0.1:8000/api/typePower").then((response) => {
      setTypePower(response.data);
      setLoading(false);
    });
    axios.get("http://127.0.0.1:8000/api/typeVGA").then((response) => {
      setTypeVGA(response.data);
      setLoading(false);
    });
    axios.get("http://127.0.0.1:8000/api/typeCooler").then((response) => {
      setTypeCooler(response.data);
      setLoading(false);
    });
  }, []);
  const handleAddAccessories = (data) => {
    if (data.loai_san_phams_id == 6) {
      config.cpu = { ...config.cpu, ...data, qty: 1 };
    } else if (data.loai_san_phams_id == 7) {
      config.ram = { ...config.ram, ...data, qty: 1 };
    } else if (data.loai_san_phams_id == 8) {
      config.main = { ...config.main, ...data, qty: 1 };
    } else if (data.loai_san_phams_id == 9) {
      config.monitor = { ...config.monitor, ...data, qty: 1 };
    } else if (data.loai_san_phams_id == 10) {
      config.storage = { ...config.storage, ...data, qty: 1 };
    } else if (data.loai_san_phams_id == 11) {
      config.power = { ...config.power, ...data, qty: 1 };
    } else if (data.loai_san_phams_id == 12) {
      config.vga = { ...config.vga, ...data, qty: 1 };
    } else if (data.loai_san_phams_id == 13) {
      config.cooler = { ...config.cooler, ...data, qty: 1 };
    }
    setShow(false);
  };
  const handleRebuilld = () => {
    setConfig({});
  };

  const handleRemove = (data) => {
    if (data.TenLoai == "CPU") {
      setConfig({
        cpu: undefined,
        ram: config.ram,
        main: config.main,
        monitor: config.monitor,
        storage: config.storage,
        power: config.power,
        vga: config.vga,
        cooler: config.cooler,
      });
    } else if (data.TenLoai == "RAM") {
      setConfig({
        cpu: config.cpu,
        ram: undefined,
        main: config.main,
        monitor: config.monitor,
        storage: config.storage,
        power: config.power,
        vga: config.vga,
        cooler: config.cooler,
      });
    } else if (data.TenLoai == "MainBoard") {
      setConfig({
        cpu: config.cpu,
        ram: config.ram,
        main: undefined,
        monitor: config.monitor,
        storage: config.storage,
        power: config.power,
        vga: config.vga,
        cooler: config.cooler,
      });
    } else if (data.TenLoai == "Monitor") {
      setConfig({
        cpu: config.cpu,
        ram: config.ram,
        main: config.main,
        monitor: undefined,
        storage: config.storage,
        power: config.power,
        vga: config.vga,
        cooler: config.cooler,
      });
    } else if (data.TenLoai == "Storage") {
      setConfig({
        cpu: config.cpu,
        ram: config.ram,
        main: config.main,
        monitor: config.monitor,
        storage: undefined,
        power: config.power,
        vga: config.vga,
        cooler: config.cooler,
      });
    } else if (data.TenLoai == "Power") {
      setConfig({
        cpu: config.cpu,
        ram: config.ram,
        main: config.main,
        monitor: config.monitor,
        storage: config.storage,
        power: undefined,
        vga: config.vga,
        cooler: config.cooler,
      });
    } else if (data.TenLoai == "VGA") {
      setConfig({
        cpu: config.cpu,
        ram: config.ram,
        main: config.main,
        monitor: config.monitor,
        storage: config.storage,
        power: config.power,
        vga: undefined,
        cooler: config.cooler,
      });
    } else if (data.TenLoai == "Cooler") {
      setConfig({
        cpu: config.cpu,
        ram: config.ram,
        main: config.main,
        monitor: config.monitor,
        storage: config.storage,
        power: config.power,
        vga: config.vga,
        cooler: undefined,
      });
    }
  };
  const handleNextPage =(page) =>{
      var nextPage = page +1;
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
            <div id="build-pc-function" ref={componentRef}>
              <div className="build-pc-header">
                <div className="left-content">
                  <Button
                    variant="danger"
                    className="re-build"
                    onClick={() => handleRebuilld()}
                  >
                    <i className="fas fa-sync"></i>
                    Xây dựng lại
                  </Button>
                </div>
                <div className="right-content">
                  <span>
                    Chi phí dự tính :
                    <NumberFormat
                      value={totalPrice}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={" VNĐ"}
                      renderText={(value, props) => (
                        <strong className="price" {...props}>
                          {value}
                        </strong>
                      )}
                    />
                  </span>
                </div>
              </div>
              {loading ? (
                <Skeleton count={12} />
              ) : (
                <div className="build-pc-body">
                  {/* CPU */}
                  {typecpu.map((item, index) => {
                    return (
                      <div className="product-type-item" key={index}>
                        <div className="left-content">1. {item.TenLoai}</div>
                        {config.cpu === undefined ? (
                          <div className="right-content">
                            <Button
                              variant="danger"
                              className="choose-product"
                              onClick={() => handleShowAccessories(item)}
                            >
                              <i className="fas fa-plus"></i>
                              {item.TenLoai}
                            </Button>
                          </div>
                        ) : (
                          <div className="right-content">
                            <div className="choose-product-item-detail">
                              <div className="image">
                                <img
                                  src={LinkImage + config.cpu.AnhDaiDien}
                                  alt={config.cpu.AnhDaiDien}
                                />
                              </div>
                              <div className="content">
                                <p className="name">{config.cpu.TenSanPham}</p>

                                <NumberFormat
                                  value={config.cpu.GiaKM}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  suffix={" VNĐ"}
                                  renderText={(value, props) => (
                                    <p className="price" {...props}>
                                      Giá: {value}
                                    </p>
                                  )}
                                />
                                <p className="productid">
                                  Mã sản phẩm: {`SP${config.cpu.id}`}
                                </p>
                                <div
                                  className="action"
                                  style={{
                                    display: "flex",
                                    marginTop: "5px",
                                  }}
                                >
                                  <span>Số lượng: </span>
                                  <TextField
                                    id="outlined-number"
                                    className="qty"
                                    type="number"
                                    defaultValue="1"
                                    value={qtyCPU}
                                    variant="outlined"
                                    onChange={(e) =>
                                      setQtyCPU(
                                        parseInt(e.target.value) >=
                                          parseInt(config.cpu.SoLuong) ||
                                          e.target.value < 1
                                          ? config.cpu.SoLuong
                                          : e.target.value
                                      )
                                    }
                                  />

                                  <span>
                                    =
                                    <NumberFormat
                                      value={priceCPU}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      suffix={" VNĐ"}
                                      renderText={(value, props) => (
                                        <strong className="price" {...props}>
                                          {value}
                                        </strong>
                                      )}
                                    />
                                  </span>
                                  <span className="delete">
                                    <i
                                      className="fas fa-trash-alt"
                                      onClick={() => handleRemove(item)}
                                    ></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* ram */}
                  {typeram.map((item, index) => (
                    <div className="product-type-item" key={index}>
                      <div className="left-content">2. {item.TenLoai}</div>
                      {config.ram == null ? (
                        <div className="right-content">
                          <Button
                            variant="danger"
                            className="choose-product"
                            onClick={() => handleShowAccessories(item)}
                          >
                            <i className="fas fa-plus"></i>
                            {item.TenLoai}
                          </Button>
                        </div>
                      ) : (
                        <div className="right-content">
                          <div className="choose-product-item-detail">
                            <div className="image">
                              <img
                                src={LinkImage + config.ram.AnhDaiDien}
                                alt={config.ram.AnhDaiDien}
                              />
                            </div>
                            <div className="content">
                              <p className="name">{config.ram.TenSanPham}</p>
                              {/* <p className="price">Giá: {config.cpu.GiaKM} VNĐ</p> */}
                              <NumberFormat
                                value={config.ram.GiaKM}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <p className="price" {...props}>
                                    Giá: {value}
                                  </p>
                                )}
                              />
                              <p className="productid">
                                Mã sản phẩm: {`SP${config.ram.id}`}
                              </p>
                              <div
                                className="action"
                                style={{
                                  display: "flex",
                                  marginTop: "5px",
                                }}
                              >
                                <span>Số lượng: </span>
                                <TextField
                                  id="outlined-number"
                                  className="qty"
                                  type="number"
                                  defaultValue="1"
                                  variant="outlined"
                                  value={qtyRAM}
                                  onChange={(e) =>
                                    setQtyRam(
                                      parseInt(e.target.value) >=
                                        parseInt(config.ram.SoLuong) ||
                                        e.target.value < 1
                                        ? config.ram.SoLuong
                                        : e.target.value
                                    )
                                  }
                                />
                                <span>
                                  =
                                  <NumberFormat
                                    value={priceRAM}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={" VNĐ"}
                                    renderText={(value, props) => (
                                      <strong className="price" {...props}>
                                        {value}
                                      </strong>
                                    )}
                                  />
                                </span>
                                <span className="delete">
                                  <i
                                    className="fas fa-trash-alt"
                                    onClick={() => handleRemove(item)}
                                  ></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* mainboard */}
                  {typemain.map((item, index) => (
                    <div className="product-type-item" key={index}>
                      <div className="left-content">3. {item.TenLoai}</div>
                      {config.main == null ? (
                        <div className="right-content">
                          <Button
                            variant="danger"
                            className="choose-product"
                            onClick={() => handleShowAccessories(item)}
                          >
                            <i className="fas fa-plus"></i>
                            {item.TenLoai}
                          </Button>
                        </div>
                      ) : (
                        <div className="right-content">
                          <div className="choose-product-item-detail">
                            <div className="image">
                              <img
                                src={LinkImage + config.main.AnhDaiDien}
                                alt={config.main.AnhDaiDien}
                              />
                            </div>
                            <div className="content">
                              <p className="name">{config.main.TenSanPham}</p>

                              <NumberFormat
                                value={config.main.GiaKM}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <p className="price" {...props}>
                                    Giá: {value}
                                  </p>
                                )}
                              />
                              <p className="productid">
                                Mã sản phẩm: {`SP${config.main.id}`}
                              </p>
                              <div
                                className="action"
                                style={{
                                  display: "flex",
                                  marginTop: "5px",
                                }}
                              >
                                <span>Số lượng: </span>
                                <TextField
                                  id="outlined-number"
                                  className="qty"
                                  type="number"
                                  defaultValue="1"
                                  variant="outlined"
                                  value={qtyMain}
                                  // value={parseInt(qtyMain)> parseInt(config.main.SoLuong) ||parseInt(qtyMain)<1?parseInt(config.main.SoLuong) :qtyMain}
                                  onChange={(e) =>
                                    setQtyMain(
                                      parseInt(e.target.value) >=
                                        parseInt(config.main.SoLuong) ||
                                        e.target.value < 1
                                        ? config.main.SoLuong
                                        : e.target.value
                                    )
                                  }
                                  // onChange={(e) => setQtyMain(e.target.value)}
                                />
                                <span>
                                  =
                                  <NumberFormat
                                    value={priceMain}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={" VNĐ"}
                                    renderText={(value, props) => (
                                      <strong className="price" {...props}>
                                        {value}
                                      </strong>
                                    )}
                                  />
                                </span>
                                <span className="delete">
                                  <i
                                    className="fas fa-trash-alt"
                                    onClick={() => handleRemove(item)}
                                  ></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Monitor */}
                  {typemonitor.map((item, index) => (
                    <div className="product-type-item" key={index}>
                      <div className="left-content">4. {item.TenLoai}</div>
                      {config.monitor == null ? (
                        <div className="right-content">
                          <Button
                            variant="danger"
                            className="choose-product"
                            onClick={() => handleShowAccessories(item)}
                          >
                            <i className="fas fa-plus"></i>
                            {item.TenLoai}
                          </Button>
                        </div>
                      ) : (
                        <div className="right-content">
                          <div className="choose-product-item-detail">
                            <div className="image">
                              <img
                                src={LinkImage + config.monitor.AnhDaiDien}
                                alt={config.monitor.AnhDaiDien}
                              />
                            </div>
                            <div className="content">
                              <p className="name">
                                {config.monitor.TenSanPham}
                              </p>

                              <NumberFormat
                                value={config.monitor.GiaKM}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <p className="price" {...props}>
                                    Giá: {value}
                                  </p>
                                )}
                              />
                              <p className="productid">
                                Mã sản phẩm: {`SP${config.monitor.id}`}
                              </p>
                              <div
                                className="action"
                                style={{
                                  display: "flex",
                                  marginTop: "5px",
                                }}
                              >
                                <span>Số lượng: </span>
                                <TextField
                                  id="outlined-number"
                                  className="qty"
                                  type="number"
                                  defaultValue="1"
                                  variant="outlined"
                                  value={qtyMonitor}
                                  // onChange={(e) => setQtyMonitor(e.target.value)}
                                  onChange={(e) =>
                                    setQtyMonitor(
                                      parseInt(e.target.value) >=
                                        parseInt(config.monitor.SoLuong) ||
                                        e.target.value < 1
                                        ? config.monitor.SoLuong
                                        : e.target.value
                                    )
                                  }
                                />
                                <span>
                                  =
                                  <NumberFormat
                                    value={priceMonitor}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={" VNĐ"}
                                    renderText={(value, props) => (
                                      <strong className="price" {...props}>
                                        {value}
                                      </strong>
                                    )}
                                  />
                                </span>
                                <span className="delete">
                                  <i
                                    className="fas fa-trash-alt"
                                    onClick={() => handleRemove(item)}
                                  ></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {/* storage */}
                  {typestorage.map((item, index) => (
                    <div className="product-type-item" key={index}>
                      <div className="left-content">5. {item.TenLoai}</div>
                      {config.storage == null ? (
                        <div className="right-content">
                          <Button
                            variant="danger"
                            className="choose-product"
                            onClick={() => handleShowAccessories(item)}
                          >
                            <i className="fas fa-plus"></i>
                            {item.TenLoai}
                          </Button>
                        </div>
                      ) : (
                        <div className="right-content">
                          <div className="choose-product-item-detail">
                            <div className="image">
                              <img
                                src={LinkImage + config.storage.AnhDaiDien}
                                alt={config.storage.AnhDaiDien}
                              />
                            </div>
                            <div className="content">
                              <p className="name">
                                {config.storage.TenSanPham}
                              </p>

                              <NumberFormat
                                value={config.storage.GiaKM}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <p className="price" {...props}>
                                    Giá: {value}
                                  </p>
                                )}
                              />
                              <p className="productid">
                                Mã sản phẩm: {`SP${config.storage.id}`}
                              </p>
                              <div
                                className="action"
                                style={{
                                  display: "flex",
                                  marginTop: "5px",
                                }}
                              >
                                <span>Số lượng: </span>
                                <TextField
                                  id="outlined-number"
                                  className="qty"
                                  type="number"
                                  defaultValue="1"
                                  variant="outlined"
                                  value={qtyStorage}
                                  onChange={(e) =>
                                    setQtyStorage(
                                      parseInt(e.target.value) >=
                                        parseInt(config.storage.SoLuong) ||
                                        e.target.value < 1
                                        ? config.storage.SoLuong
                                        : e.target.value
                                    )
                                  }
                                />
                                <span>
                                  =
                                  <NumberFormat
                                    value={priceStorage}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={" VNĐ"}
                                    renderText={(value, props) => (
                                      <strong className="price" {...props}>
                                        {value}
                                      </strong>
                                    )}
                                  />
                                </span>
                                <span className="delete">
                                  <i
                                    className="fas fa-trash-alt"
                                    onClick={() => handleRemove(item)}
                                  ></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {/* power */}
                  {typepower.map((item, index) => (
                    <div className="product-type-item" key={index}>
                      <div className="left-content">6. {item.TenLoai}</div>
                      {config.power == null ? (
                        <div className="right-content">
                          <Button
                            variant="danger"
                            className="choose-product"
                            onClick={() => handleShowAccessories(item)}
                          >
                            <i className="fas fa-plus"></i>
                            {item.TenLoai}
                          </Button>
                        </div>
                      ) : (
                        <div className="right-content">
                          <div className="choose-product-item-detail">
                            <div className="image">
                              <img
                                src={LinkImage + config.power.AnhDaiDien}
                                alt={config.power.AnhDaiDien}
                              />
                            </div>
                            <div className="content">
                              <p className="name">{config.power.TenSanPham}</p>

                              <NumberFormat
                                value={config.power.GiaKM}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <p className="price" {...props}>
                                    Giá: {value}
                                  </p>
                                )}
                              />
                              <p className="productid">
                                Mã sản phẩm: {`SP${config.power.id}`}
                              </p>
                              <div
                                className="action"
                                style={{
                                  display: "flex",
                                  marginTop: "5px",
                                }}
                              >
                                <span>Số lượng: </span>
                                <TextField
                                  id="outlined-number"
                                  className="qty"
                                  type="number"
                                  defaultValue="1"
                                  variant="outlined"
                                  value={qtyPower}
                                  onChange={(e) =>
                                    setQtyPower(
                                      parseInt(e.target.value) >=
                                        parseInt(config.power.SoLuong) ||
                                        e.target.value < 1
                                        ? config.power.SoLuong
                                        : e.target.value
                                    )
                                  }
                                />
                                <span>
                                  =
                                  <NumberFormat
                                    value={pricePower}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={" VNĐ"}
                                    renderText={(value, props) => (
                                      <strong className="price" {...props}>
                                        {value}
                                      </strong>
                                    )}
                                  />
                                </span>
                                <span className="delete">
                                  <i
                                    className="fas fa-trash-alt"
                                    onClick={() => handleRemove(item)}
                                  ></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {/* vga */}
                  {typevga.map((item, index) => (
                    <div className="product-type-item" key={index}>
                      <div className="left-content">7. {item.TenLoai}</div>
                      {config.vga == null ? (
                        <div className="right-content">
                          <Button
                            variant="danger"
                            className="choose-product"
                            onClick={() => handleShowAccessories(item)}
                          >
                            <i className="fas fa-plus"></i>
                            {item.TenLoai}
                          </Button>
                        </div>
                      ) : (
                        <div className="right-content">
                          <div className="choose-product-item-detail">
                            <div className="image">
                              <img
                                src={LinkImage + config.vga.AnhDaiDien}
                                alt={config.vga.AnhDaiDien}
                              />
                            </div>
                            <div className="content">
                              <p className="name">{config.vga.TenSanPham}</p>

                              <NumberFormat
                                value={config.vga.GiaKM}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <p className="price" {...props}>
                                    Giá: {value}
                                  </p>
                                )}
                              />
                              <p className="productid">
                                Mã sản phẩm: {`SP${config.vga.id}`}
                              </p>
                              <div
                                className="action"
                                style={{
                                  display: "flex",
                                  marginTop: "5px",
                                }}
                              >
                                <span>Số lượng: </span>
                                <TextField
                                  id="outlined-number"
                                  className="qty"
                                  type="number"
                                  defaultValue="1"
                                  variant="outlined"
                                  value={qtyVGA}
                                  onChange={(e) =>
                                    setQtyVGA(
                                      parseInt(e.target.value) >=
                                        parseInt(config.vga.SoLuong) ||
                                        e.target.value < 1
                                        ? config.vga.SoLuong
                                        : e.target.value
                                    )
                                  }
                                />
                                <span>
                                  =
                                  <NumberFormat
                                    value={priceVGA}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={" VNĐ"}
                                    renderText={(value, props) => (
                                      <strong className="price" {...props}>
                                        {value}
                                      </strong>
                                    )}
                                  />
                                </span>
                                <span className="delete">
                                  <i
                                    className="fas fa-trash-alt"
                                    onClick={() => handleRemove(item)}
                                  ></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {/* tản nhiệt */}
                  {typecooler.map((item, index) => (
                    <div className="product-type-item" key={index}>
                      <div className="left-content">8. {item.TenLoai}</div>
                      {config.cooler == null ? (
                        <div className="right-content">
                          <Button
                            variant="danger"
                            className="choose-product"
                            onClick={() => handleShowAccessories(item)}
                          >
                            <i className="fas fa-plus"></i>
                            {item.TenLoai}
                          </Button>
                        </div>
                      ) : (
                        <div className="right-content">
                          <div className="choose-product-item-detail">
                            <div className="image">
                              <img
                                src={LinkImage + config.cooler.AnhDaiDien}
                                alt={config.cooler.AnhDaiDien}
                              />
                            </div>
                            <div className="content">
                              <p className="name">{config.cooler.TenSanPham}</p>

                              <NumberFormat
                                value={config.cooler.GiaKM}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <p className="price" {...props}>
                                    Giá: {value}
                                  </p>
                                )}
                              />
                              <p className="productid">
                                Mã sản phẩm: {`SP${config.cooler.id}`}
                              </p>
                              <div
                                className="action"
                                style={{
                                  display: "flex",
                                  marginTop: "5px",
                                }}
                              >
                                <span>Số lượng: </span>
                                <TextField
                                  id="outlined-number"
                                  className="qty"
                                  type="number"
                                  defaultValue="1"
                                  variant="outlined"
                                  value={qtyCooler}
                                  onChange={(e) =>
                                    setQtyCooler(
                                      parseInt(e.target.value) >=
                                        parseInt(config.cooler.SoLuong) ||
                                        e.target.value < 1
                                        ? config.cooler.SoLuong
                                        : e.target.value
                                    )
                                  }
                                />
                                <span>
                                  =
                                  <NumberFormat
                                    value={priceCooler}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={" VNĐ"}
                                    renderText={(value, props) => (
                                      <strong className="price" {...props}>
                                        {value}
                                      </strong>
                                    )}
                                  />
                                </span>
                                <span className="delete">
                                  <i
                                    className="fas fa-trash-alt"
                                    onClick={() => handleRemove(item)}
                                  ></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="build-pc-footer">
              <div className="btn-item">
                <ReactToPrint
                  trigger={() => (
                    <Button className="btn btnSaving">
                      <i className="fas fa-images"></i>
                      Tải file cấu hình
                    </Button>
                  )}
                  content={() => componentRef.current}
                  documentTitle={`BuildPC` + today}
                />
              </div>
              {/* <div className="btn-item">
                <Button
                  className="btn btnShare"
                  onClick={() => exportComponentAsPNG(componentRef)}
                >
                  <i className="fab fa-facebook-f"></i>
                  Tải ảnh cấu hình
                </Button>
              </div> */}
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
              onChange={(e) => setKeyword(e.target.value)}
            />
          </InputGroup>
          <i className="fas fa-times" onClick={handleClose}></i>
        </Modal.Header>
        <Modal.Body>
          <div className="list-product-modal">
            <div className="list-product-header">
              <span>
                Trang
                <strong>{page}</strong>/<strong>{totalPage}</strong>
              </span>
              <Button className="btn-prev">
                <i className="fas fa-backward" onClick={()=> setPage(page == 0 || page ==1 ? 1 : page - 1)}></i>
              </Button>
              <input
                className="input-paging"
                type="number"
                disabled
                value={page}
              />
              <Button className="btn-next">
                <i className="fas fa-forward" onClick={()=>setPage(page >= totalPage ? totalPage : page+1)}></i>
              </Button>
            </div>
            <div className="list-product-data">
              {/* {accessories.map((item, index) => { */}
              {accessories
                .filter(({ TenSanPham }) =>
                  TenSanPham.toLowerCase().includes(keyword.toLowerCase())
                )
                .map((item, index) => (
                  <div className="modal-product-detail" key={index}>
                    <div className="image">
                      <img src={LinkImage + item.AnhDaiDien} alt="AnhDaiDien" />
                    </div>
                    <div className="content">
                      <Link to={`/ProductDetail/${item.id}`} target="_blank">
                        <p className="name">{item.TenSanPham}</p>
                        <p className="productid">Mã sản phẩm: SP{item.id}</p>
                        <NumberFormat
                          value={item.GiaKM}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={" VNĐ"}
                          renderText={(value, props) => (
                            <p className="price" {...props}>
                              {value}
                            </p>
                          )}
                        />
                      </Link>
                      <Button
                        className="add-to-build"
                        onClick={() => handleAddAccessories(item)}
                      >
                        Chọn
                      </Button>
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

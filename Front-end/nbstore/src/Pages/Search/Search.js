import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import NumberFormat from "react-number-format";
import { Form } from "react-bootstrap";
export default function Search() {
  const [result,setResult]=useState([]);
  const [sort, setSort] = useState("");

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  var query = useQuery();
  var name = query.get("kq");
  useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/searchByKeyWord/${name}`)
      .then((response) =>{
        setResult(response.data);
      })
  },[])
  const handleSort = () => {
    if (sort == 1) {
      const sortIncrease = [...result].sort((a, b) => {
        return a.GiaKM - b.GiaKM;
      });
      setResult(sortIncrease);
    } else if (sort == 2) {
      const sortDecrease = [...result].sort((a, b) => {
        return b.GiaKM - a.GiaKM;
      });
      setResult(sortDecrease);
    }
    else if (sort == "")
    {
        return result;
    }
    else if (sort == 3)
    {
        const FilterPriceFive = [...result].filter(a => a.GiaKM >= 5000000 && a.GiaKM <= 20000000);
        setResult(FilterPriceFive);
    }
    else if (sort == 4)
    {
        const FilterPriceTotal = [...result].filter(a => a.GiaKM >= 25000000 && a.GiaKM <= 40000000);
        setResult(FilterPriceTotal);
    }
  };
  const LinkImage = "http://127.0.0.1:8000/images/";

  return (
    <>
      <Header />
      <div className="noindex">
        <section className="light_section">
          <div id="collection" className="container">
            <div className="col-sm-12">
              <h1 className="title-box-collection" style={{ fontSize: "36px" }}>
                Tìm kiếm
              </h1>
              <div className="row">
                <div className="main-content">
                  <div id="breadcrumb">
                    <div className="main">
                      <div className="breadcrumbs container">
                        <span className="showHere">Kết quả tìm kiếm: {name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-sm-12 wrap-sort-by">
                        <div className="browse-tags pull-right">
                          <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                              <Form.Label>Tùy chọn</Form.Label>
                              <Form.Control
                                as="select"
                                onChange={(e) => setSort(e.target.value)}
                                onClick={handleSort}
                              >
                                <option value="">Tùy chọn</option>
                                <option value="1">Giá từ thấp đến cao</option>
                                <option value="2">Giá từ cao đến thấp</option>
                                <option value="3">Giá từ 5 đến 20 triệu</option>
                                <option value="4">Giá từ 25 đến 40 triệu </option>

                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 product-list">
                    <div className="row content-product-list">

                      {result.map((v,index)=>(
                        <div className="col-sm-4 col-xs-12 padding-none col-fix20" key={index}>
                        <div className="product-row">
                          <div className="product-row-img">
                            <Link to={`/ProductDetail/${v.id}`}>
                              <img
                                src={LinkImage + v.AnhDaiDien}
                                alt={v.AnhDaiDien}
                                className="product-row-thumbnail"
                              />
                            </Link>
                            <div className="product-row-price-hover">
                              <Link to={`/ProductDetail/${v.id}`}>
                                <div className="product-row-note pull-left">
                                  Xem chi tiết
                                </div>
                              </Link>
                              <Link
                                to={`/ProductDetail/${v.id}`}
                                className="product-row-btnbuy pull-right"
                              > 
                                đặt hàng
                              </Link>
                            </div>
                          </div>

                          <h2 className="product-row-name">
                            {v.TenSanPham}
                          </h2>
                          <div className="product-row-info">
                            <div className="product-row-price pull-left">
                              {/* <del>17,290,000₫</del> */}
                              <NumberFormat
                                value={v.GiaCu}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <del {...props}>{value}</del>
                                )}
                              />
                              <br />
                             
                              <NumberFormat
                                value={v.GiaKM}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" VNĐ"}
                                renderText={(value, props) => (
                                  <span className="product-row-sale" {...props}>{value}</span>
                                )}
                              />
                            </div>
                            <div className="new-product-percent">-10%</div>
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
import "./Body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Button} from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Body() {
  return (
    <>
      <div className="container mb-4 box-flashsale">
        <div className="row">
          <div className="col-6">
            <p className="mb-0">
              <strong className="d-flex align-items-center">
                Hot
                <img
                  src="https://cellphones.com.vn/media/icon/flash.gif"
                  alt="hotsale"
                />
                Sale
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-4 text-center">
      <div className="row">

        <div className="content-body">
          <div className="group-content">
            <div className="group-sale">
              <div className="text-center">
              
                <br/>
                <Swiper
                    spaceBetween={-515}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide><div className="sale">
                <Card style={{ width: '240px' }}>
                  <Card.Img variant="top" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a12_2_.jpg"/>
                  <div className="product__box-sticker">
                        <p className="sticker-percent">
                          -10%
                        </p>
                        <p className="sticker-flashsale">
                          <i className="icon-cps-sale"></i>
                        </p>
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <h3>Samsung galaxy A12</h3>
                    </Card.Title>
                    
                    <Button variant="primary">Mua ngay</Button>
                  </Card.Body>
                </Card>
                </div></SwiperSlide>
                    <SwiperSlide><div className="sale">
                <Card style={{ width: '240px' }}>
                  <Card.Img variant="top" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a12_2_.jpg"/>
                  <Card.Body>
                    <Card.Title>
                      <h3>Samsung galaxy A12</h3>
                    </Card.Title>
                    
                    <Button variant="primary">Mua ngay</Button>
                  </Card.Body>
                </Card>
                </div></SwiperSlide>
                    <SwiperSlide><div className="sale">
                <Card style={{ width: '240px' }}>
                  <Card.Img variant="top" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a12_2_.jpg"/>
                  <Card.Body>
                    <Card.Title>
                      <h3>Samsung galaxy A12</h3>
                    </Card.Title>
                    
                    <Button variant="primary">Mua ngay</Button>
                  </Card.Body>
                </Card>
                </div></SwiperSlide>
                    <SwiperSlide><div className="sale">
                <Card style={{ width: '240px' }}>
                  <Card.Img variant="top" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a12_2_.jpg"/>
                  <Card.Body>
                    <Card.Title>
                      <h3>Samsung galaxy A12</h3>
                    </Card.Title>
                    
                    <Button variant="primary">Mua ngay</Button>
                  </Card.Body>
                </Card>
                </div>
                </SwiperSlide>
                <SwiperSlide><div className="sale">
                <Card style={{ width: '240px' }}>
                  <Card.Img variant="top" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a12_2_.jpg"/>
                  <Card.Body>
                    <Card.Title>
                      <h3>Samsung galaxy A12</h3>
                    </Card.Title>
                    
                    <Button variant="primary">Mua ngay</Button>
                  </Card.Body>
                </Card>
                </div>
                </SwiperSlide>
                
                    ...
                  </Swiper>
              {/* <div className="sale">
                <Card style={{ width: '240px' }}>
                  <Card.Img variant="top" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a12_2_.jpg"/>
                  <Card.Body>
                    <Card.Title>
                      <h3>Samsung galaxy A12</h3>
                    </Card.Title>
                    
                    <Button variant="primary">Mua ngay</Button>
                  </Card.Body>
                </Card>
                </div>
                <div className="sale">
                <Card style={{ width: '240px' }}>
                  <Card.Img variant="top" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a12_2_.jpg"/>
                  <Card.Body>
                    <Card.Title>
                      <h3>Samsung galaxy A12</h3>
                    </Card.Title>
                    
                    <Button variant="primary">Mua ngay</Button>
                  </Card.Body>
                </Card>
                </div>
                <div className="sale">
                <Card style={{ width: '240px' }}>
                  <Card.Img variant="top" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a12_2_.jpg"/>
                  <Card.Body>
                    <Card.Title>
                      <h3>Samsung galaxy A12</h3>
                    </Card.Title>
                    
                    <Button variant="primary">Mua ngay</Button>
                  </Card.Body>
                </Card>
                </div>
                <div className="sale">
                <Card style={{ width: '240px' }}>
                  <Card.Img variant="top" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a12_2_.jpg"/>
                  <Card.Body>
                    <Card.Title>
                      <h3>Samsung galaxy A12</h3>
                    </Card.Title>
                    
                    <Button variant="primary">Mua ngay</Button>
                  </Card.Body>
                </Card>
                </div>
                <div className="sale">
                <Card style={{ width: '240px' }}>
                  <Card.Img variant="top" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a12_2_.jpg"/>
                  <Card.Body>
                    <Card.Title>
                      <h3>Samsung galaxy A12</h3>
                    </Card.Title>
                    
                    <Button variant="primary">Mua ngay</Button>
                  </Card.Body>
                </Card>
                </div>
                <div className="sale">
                <Card style={{ width: '240px' }}>
                  <Card.Img variant="top" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a12_2_.jpg"/>
                  <Card.Body>
                    <Card.Title>
                      <h3>Samsung galaxy A12</h3>
                    </Card.Title>
                    
                    <Button variant="primary">Mua ngay</Button>
                  </Card.Body>
                </Card>
                </div>
                 */}
                 
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

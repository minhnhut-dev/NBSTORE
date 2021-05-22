import React, { useState,useEffect} from "react";
import axios from "axios";
import "./Body.css";
import ProductMouseDeal from "../../Component/Product/ProductMouseDeal/ProductMouseDeal";
import ProductBestSellingByBrand from "../../Component/Product/ProductBestSellingByBrand/ProductBestSellingByBrand";
import ProductDealinMonth from "../../Component/Product/ProductDealinMonth/ProductDealinMonth";
import ProductKeyBoardDeal from "../../Component/Product/ProductKeyBoardDeal/ProductKeyBoardDeal";
function Body() {
  // const product=[
  //   {'name':"Acer Nitro 5",
  //   'image':'//product.hstatic.net/1000026716/product/r4st_e4cdcf53ef724ad093cc2d439bdd5994_large.png',
  //   'price':'25000000',
  //   },
  //   {'name':"Akko Midnight",
  //   'image':'//product.hstatic.net/1000026716/product/3108-ava_ee33309b996946419b65108e5745e367_large.jpg',
  //   'price':'1000000',
  //   },
  //   {'name':"HP Omen",
  //   'image':'//product.hstatic.net/1000026716/product/r3sm_8d2a670269eb4c6a840919c231f26f87_large.png',
  //   'price':'25000000',
  //   },
  //   {'name':"Lenovo Legion 5",
  //   'image':'//product.hstatic.net/1000026716/product/78tn_a29a4ed5ae4142e6ad3c3cd2fb28a8d2_large.png',
  //   'price':'26000000',
  //   }
  // ]
  const [products, SetProduct]=useState([]);
  useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/ProductDealInMonth')
      .then(response=>{
        console.log("res:",response.data);
        SetProduct(response.data);
      },()=>{
      })
      .catch(err=>
        {
          console.log(err);
        })
        
  },[])
    return (
    <>
      <div className="container pd0-sm-mb">
        <ProductDealinMonth product={products}  />
        {/* <ProductKeyBoardDeal/>
        <ProductBestSellingByBrand/>
        <ProductMouseDeal/> */}
      </div>
    </>
  );
}

export default Body;

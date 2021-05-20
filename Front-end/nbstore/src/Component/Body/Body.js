import React, { useState } from "react";
import "./Body.css";
import ProductMouseDeal from "../../Component/Product/ProductMouseDeal/ProductMouseDeal";
import ProductBestSellingByBrand from "../../Component/Product/ProductBestSellingByBrand/ProductBestSellingByBrand";
import ProductDealinMonth from "../../Component/Product/ProductDealinMonth/ProductDealinMonth";
import ProductKeyBoardDeal from "../../Component/Product/ProductKeyBoardDeal/ProductKeyBoardDeal";
function Body() {
  const product=[
    {'name':"Acer Nitro 5",
    'image':'//product.hstatic.net/1000026716/product/r4st_e4cdcf53ef724ad093cc2d439bdd5994_large.png',
    'price':'25000000',
    },
    {'name':"Akko Midnight",
    'image':'//product.hstatic.net/1000026716/product/3108-ava_ee33309b996946419b65108e5745e367_large.jpg',
    'price':'1000000',
    },
    {'name':"HP Omen",
    'image':'//product.hstatic.net/1000026716/product/r3sm_8d2a670269eb4c6a840919c231f26f87_large.png',
    'price':'25000000',
    },
    {'name':"Lenovo Legion 5",
    'image':'//product.hstatic.net/1000026716/product/78tn_a29a4ed5ae4142e6ad3c3cd2fb28a8d2_large.png',
    'price':'26000000',
    }
  ]
  const [products, SetProduct]=useState(product);
    return (
    <>
      <div className="container pd0-sm-mb">
        {/**List 1 */}
        <ProductDealinMonth product={products} />
        {/**List 2 */}
        <ProductKeyBoardDeal/>
        {/**end list 2 */}
        {/**list 3 */}
        <ProductBestSellingByBrand/>
        {/**end list 3 */}
        {/**list 4 */}
        <ProductMouseDeal/>
        {/**end list 4 */}
      </div>
    </>
  );
}

export default Body;

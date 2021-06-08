import React  from "react";
import "./Body.css";
import Skeleton from 'react-loading-skeleton';
import ProductMouseDeal from "../../Component/Product/ProductMouseDeal/ProductMouseDeal";
import ProductBestSellingByBrand from "../../Component/Product/ProductBestSellingByBrand/ProductBestSellingByBrand";
import ProductDealinMonth from "../../Component/Product/ProductDealinMonth/ProductDealinMonth";
import ProductKeyBoardDeal from "../../Component/Product/ProductKeyBoardDeal/ProductKeyBoardDeal";
function Body(props) { 
  const {products,loading}=props;
    return (
    <>
      <div className="container pd0-sm-mb">
        {/* <ProductDealinMonth products={products}  /> */}
       {loading ?<Skeleton count={5}/> :  <ProductBestSellingByBrand products={products}/>} 
        {/* <ProductKeyBoardDeal/>
        <ProductBestSellingByBrand/>
        <ProductMouseDeal/> */}
          <ProductMouseDeal/>
      </div>
    </>
  );
}

export default Body;

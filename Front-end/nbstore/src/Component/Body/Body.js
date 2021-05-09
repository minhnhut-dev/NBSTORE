import React from "react";
import "./Body.css";
import ProductMouseDeal from "../../Component/Product/ProductMouseDeal/ProductMouseDeal";
import ProductBestSellingByBrand from "../../Component/Product/ProductBestSellingByBrand/ProductBestSellingByBrand";
import ProductDealinMonth from "../../Component/Product/ProductDealinMonth/ProductDealinMonth";
import ProductKeyBoardDeal from "../../Component/Product/ProductKeyBoardDeal/ProductKeyBoardDeal";
function Body() {
  return (
    <>
      <div className="container pd0-sm-mb">
        {/**List 1 */}
        <ProductDealinMonth/>
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

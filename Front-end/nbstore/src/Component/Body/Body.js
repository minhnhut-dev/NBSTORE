import React, { useEffect, useState }  from "react";
import "./Body.css";
import Skeleton from 'react-loading-skeleton';
import ProductBestSellingByBrand from "../../Component/Product/ProductBestSellingByBrand/ProductBestSellingByBrand";
import ProductsAccordingToCriteria from "../Product/ProductsAccordingToCriteria/ProductsAccordingToCriteria";
import axios from "axios";
function Body(props) { 
  const [typeProduct,setTypeProduct] = useState([]);
    useEffect(() => {
      
         axios.get('http://127.0.0.1:8000/api/getAllTypeProduct')
         .then((response) =>{
             setTypeProduct(response.data);    
         })
       
    },[])
  const {products,loading}=props;
    return (
    <>
      <div className="container pd0-sm-mb">
        {/* <ProductDealinMonth products={products}  /> */}
       {loading ?<Skeleton count={5}/> :  <ProductBestSellingByBrand products={products}/>} 
       
       {typeProduct.map((item,index)=>(
         <ProductsAccordingToCriteria key={index} title={item.TenLoai} id={item.id} />
       ))}
           
      </div>
    </>
  );
}

export default Body;

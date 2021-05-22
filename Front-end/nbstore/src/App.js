import "./App.css";
import React,{ useState,useEffect} from "react";
import axios from "axios";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Login from "./Pages/Login/Login";
import TypeProduct from "./Pages/TypeProduct/TypeProduct";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Pages/Register/Register";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
function App() {
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
      <Router>
        <Switch>
          <Route exact path="/">
            <Home products={products}/>
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/ProductDetail/:id">
            <ProductDetail products={products}/>
          </Route>
          <Route path="/collections/">
              <TypeProduct/>
          </Route>
          <Route path="/cart">
              <Cart/>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

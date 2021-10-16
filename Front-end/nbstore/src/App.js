import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Login from "./Pages/Login/Login";
import TypeProduct from "./Pages/TypeProduct/TypeProduct";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Pages/Register/Register";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Order from "./Pages/Account/allOrder/Order";
import Ordered from "./Pages/Account/Ordered/Ordered";
import InformationOrder from "./Pages/Account/InformationOrder/InformationOrder";
import BuildConfig from "./Pages/BuildConfig/BuildConfig";
import SendMailResetPassword from "./Pages/Account/SendMailResetPassword/SendMailResetPassword";
import ResetPassword from "./Pages/Account/ResetPassword/ResetPassword";
import Search from "./Pages/Search/Search";
import PaymentResult from "./Pages/PaymentMoMo/PaymentResult";
import CompleteOrder from "./Pages/Account/CompleteOrder/CompleteOrder";
import OrderCancel from "./Pages/Account/OrderCanceled/OrderCanceled";

import UpdateUser from "./Pages/Account/UpdateUser/UpdateUser";
import UpdatePassword from "./Pages/Account/UpdatePassword/UpdatePassword";
import ActiveUser from "./Pages/Account/ActiveUser/ActiveUser";
import PaymentGuide from "./Pages/PaymentGuide/PaymentGuide";
import Promotion from "./Pages/Promotion/Promotion";
const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("cartItems") || "[]"
);
function App() {
  const [products, SetProduct] = useState([]);
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/ProductDealInMonth")
      .then(
        (response) => {
          console.log("res:", response.data);
          SetProduct(response.data);
          setLoading(false);
        },
        () => {}
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  
  const onAdd = (product) => {
    // setCartItems([...cartItems,product]);
    // console.log(product.id);
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        
        cartItems.map((x) =>
          x.id === product.id? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home products={products} loading={loading} />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/ProductDetail/:id">
            <ProductDetail onAdd={onAdd} />
          </Route>
          <Route path="/collections/:id">
            <TypeProduct />
          </Route>
          <Route path="/cart">
            <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
          </Route>
          <Route path="/account-order">
            <Order />
          </Route>
          <Route path="/account-ordered">
            <Ordered />
          </Route>
          <Route path="/account-completeOrder">
            <CompleteOrder />
          </Route>
          <Route path="/account/order/:id">
            <InformationOrder />
          </Route>
          <Route path="/resultOrder/">
            <PaymentResult/>
          </Route>
          <Route path="/account-orderCanceled">
            <OrderCancel/>
          </Route>
          <Route path="/updateUser/">
            <UpdateUser/>
          </Route>
          <Route path="/updatePassword/">
            <UpdatePassword/>
          </Route>
          <Route path="/acount/resetPassword">
            <SendMailResetPassword />
          </Route>
          <Route path="/buildPC">
            <BuildConfig />
          </Route>
          <Route path="/account/configPassword/:token">
            <ResetPassword />
          </Route>
          <Route path="/account/activeUser">
            <ActiveUser />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/PaymentGuide">
            <PaymentGuide />
          </Route>
          <Route path="/Promotion-information">
            <Promotion />
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

import "./App.css";
import React from "react";
import Header from "./Component/Header/Header";
import Banner from "./Component/Banner/Banner";
import Body from "./Component/Body/Body";
import Footer from "./Component/Footer/Footer";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Pages/Register/Register";
import NoMatch from "./Pages/NoMatch/NoMatch";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Banner />
            <Body />
            <Footer />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/ProductDetail">
            <ProductDetail />
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

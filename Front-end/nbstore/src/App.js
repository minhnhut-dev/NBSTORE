import "./App.css";
import React from "react";
import Header from "./Component/Header/Header";
import Banner from "./Component/Banner/Banner";
import Body from "./Component/Body/Body";
import Footer from "./Component/Footer/Footer";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Header />
      <Banner />
      <Body />
      <Footer /> */}
      {/* <ProductDetail/> */}
      {/* <Login/> */}
      <Router>
        {/* <Header/>
        <Banner/>
        <Route path="/" component={Body}>
        </Route>
        <Footer/> */}
        <Switch>
          <Route  exact path="/" >
            <Header />
            <Banner />
            <Body />
            <Footer />
          </Route>
        </Switch>
        <Route  exact path="/Login">
          <Login />
        </Route>
      </Router>
    </>
  );
}

export default App;

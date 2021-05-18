import "./App.css";
import React from "react";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Login from "./Pages/Login/Login";
import TypeProduct from "./Pages/TypeProduct/TypeProduct";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Pages/Register/Register";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/ProductDetail/">
            <ProductDetail />
          </Route>
          <Route path="/collections/">
              <TypeProduct/>
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

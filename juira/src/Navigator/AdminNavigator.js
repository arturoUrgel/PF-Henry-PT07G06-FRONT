import React from 'react'
import "../App.css";

import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Landing from "../components/Landing/Landing.jsx";
import Home from "../components/Home/Home.jsx";
import Detail from "../components/DetailProduct/Detail";
import SellForm from "../components/SellorEditProduct/SellForm";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";

import ScrollToTop from "../components/ScrollToTop";
import Favorites from "../components/Favorites/Favorites";
import OrdenDeCompra from "../components/OrdenDeCompra/OrdenDeCompra";
import { refreshData } from "../redux/actions/app.actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NotFound from '../components/NotFound/NotFound';

function AdminNavigator() {
    const { pathname } = useLocation();
    const reloadSesion = useDispatch(refreshData);
  
    /* useEffect(() => {
      reloadSesion(refreshData());
    }, [reloadSesion]); */
  return (
    <div className="App">
      <BrowserRouter>
        {pathname !== "/" && <NavBar />}
        <ScrollToTop />
        <div>ADMIN NAVIGATOR</div>
        <Switch>
          <Route exact path={"/"} component={Landing} />
          <Route exact path={"/juira"} component={Home} />
          <Route exact path={"/juira/dashboard"} component={Dashboard} />
          <Route exact path={"/juira/login"} component={Login} />
          <Route path={"/"} component={NotFound} />
        </Switch>
        {pathname !== "/" && <Footer />}
      </BrowserRouter>
    </div>
  )
}

export default AdminNavigator



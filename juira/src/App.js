//import logo from './logo.svg';
import "./App.css";
import axios from "axios";

import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import Detail from "./components/DetailProduct/Detail";
import SellForm from "./components/SellorEditProduct/SellForm";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import DashboardAdmin from "./components/DashboardAdmin/DashboardAdmin";
import Dashboard from "./components/DashboardUser/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import ScrollToTop from "./components/ScrollToTop";
import Favorites from "./components/Favorites/Favorites";
import OrdenDeCompra from "./components/OrdenDeCompra/OrdenDeCompra";
import { refreshData, setSpinnerLoading } from "./redux/actions/app.actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GuestNavigator from "./Navigator/GuestNavigator";
import UserNavigator from "./Navigator/UserNavigator";
import AdminNavigator from "./Navigator/AdminNavigator";

import { createTheme, ThemeProvider } from "@mui/material/styles"; //'@material-ui/core';
import { updateCartApi, updateFavApi } from "./redux/actions/products.actions";

const theme = createTheme({
  palette: {
    primary: {
      main: "#23c197",
    },
  },
});

function App() {
  const { pathname } = useLocation();
  const reloadSesion = useDispatch(refreshData);
  const dispatch = useDispatch();
  const role = useSelector((state) => state.app.token.role);

  useEffect(() => {
    reloadSesion(refreshData());
    if (role === "usuario") {
      dispatch(updateFavApi());
      dispatch(updateCartApi());
    }
  }, [reloadSesion, role]);

  

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          {!role && <GuestNavigator />}
          {role === "usuario" && <UserNavigator />}
          {role === "admin" && <AdminNavigator />}
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
/*
     _                
    / \   _ __  _ __  
   / _ \ | '_ \| '_ \ 
  / ___ \| |_) | |_) |
 /_/   \_\ .__/| .__/ 
         |_|   |_|    
*/

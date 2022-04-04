import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { SingleProduct } from "../pages/SingleProduct";
import { Login } from "../components/Login";
import { PrivateRoutes } from "./PrivateRoute";

const RouteComponent = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/products/:productId" element={<SingleProduct/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
};

export default RouteComponent;

import React from "react";
import "./App.css";
import ProductPage from "./page/product-page/product.page";
import { Routes, Route } from "react-router-dom";
import Header from "./page/header-page/header.page";
import Footer from "./page/footer-page/footer.page";
import Home from "./page/home.page/home.page";
import Login from "./page/login-register.page/login-register.page";
import Checkout from "./page/checkout-page/checkout.page";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/*" element={<ProductPage />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

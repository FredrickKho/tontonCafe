import { React } from "react";
import "./product.page.scss";
import Directory from "../../directory-item/directory-item";
import { Routes, Route } from "react-router-dom";
import { ProductList } from "./Main-Course/productList.page";
const ProductPage = () => {
  return (
    <div className="product-page">
      <Routes>
        <Route index element={<Directory />} />
        <Route path=":category" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default ProductPage;

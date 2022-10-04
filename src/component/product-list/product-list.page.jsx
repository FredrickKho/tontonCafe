import React from "react";
import { useNavigate } from "react-router-dom";
import "./product-list.page.scss";
const MenuItem = ({ productname, image, size }) => {
  const navigate = useNavigate();

  const navigateToDetail = () => navigate(productname);

  return (
    <div className={`${size} product-item`} onClick={navigateToDetail}>
      <div
        style={{ backgroundImage: `url('/assets/${image}')` }}
        className="background-image"
      />
      <div className=" content">
        <h1 className="product-name">{productname.toUpperCase()}</h1>
        <span className="list-menu">List {productname}</span>
      </div>
    </div>
  );
};

export default MenuItem;

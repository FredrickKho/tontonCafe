import React from "react";
import "./footer.page.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <div className="upper-content">
          <div className="left-content">
            <img src={require("../../images/footer-logo.png")} alt="" />
          </div>
          <div className="right-content">
            <p>"Whole food as close to nature</p>
            <p>intended it to be with low human</p>
            <p>interference"</p>
            <h2>- Chef Cynthia Louise</h2>
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="lower-content">
          <p>
            Created By - Fredrick Kho <span>Learn Udemy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

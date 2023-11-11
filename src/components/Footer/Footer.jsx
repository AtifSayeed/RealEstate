import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWith flexCenter f-container">
        {/* LeftSide */}
        <div className="flexColStart f-left">
          {/* Logo */}
          <img src="./logo2.png" alt="" width={120} />
          <span className="text">
            Our vision is to make all prople <br /> the best place to live
          </span>
        </div>

        {/* RightSide */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Banjara Hills, Hyderabad</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-main-body">
      <div className="footer-head-sec">
        <img src="footer-logo.png" alt="" />
        <img src="footer-logo2.png" alt="" />
      </div>

      <div className="footer-body-sec">
        <img src="footer-element1.png" alt="" className="footer-data"/>
        <img src="footer-element2.png" alt="" className="footer-data"/>
        <img src="footer-element3.png" alt="" className="footer-data"/>
        <img src="footer-element4.png" alt="" className="footer-data"/>
        <img src="footer-element5.png" alt="" className="footer-data"/>

      </div>
      <div className="footer-footer-sec">
        {/* <img src="footer-footer.png" alt="" /> */}
        Made with love By finland All rights reserved 
    </div>
    </div>
  );
};

export default Footer;

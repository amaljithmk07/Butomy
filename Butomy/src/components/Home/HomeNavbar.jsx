import React, { useState } from "react";
import "./HomeNavbar.css";
const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <div className="homenavbar-main-body">
      <div className="homenavbar-title-sec">
        <img src="title-logo.png" alt="" />
      </div>
      <div className="homenavbar-title-sec1">
        <ul className="homenavbar-ul">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>
      </div>
      <div className="homenavbar-title-sec2">
        <img src="login-logo.png" alt="" />
        Login / Register
      </div>
      <div className="homenavbar-title-sec3">
        <>
          <img src="search-icon.png" alt="" />
        </>
        <>
          <img src="cart-icon.png" alt="" />
        </>
        <>
          <img src="whishlist-icon.png" alt="" />
        </>
      </div>
    </div>
  );
};

export default HomeNavbar;

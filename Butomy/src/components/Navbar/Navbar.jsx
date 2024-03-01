import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-main-body">
      <div className="navbar-contact">
        <img src="call-icon.png" alt="" className="navbar-icons" />
        (225) 555-0118
      </div>
      <div className="navbar-email">
        <img src="email-icon.png" alt="" className="navbar-icons" />
        michelle.rivera@example.com{" "}
      </div>
      <div className="navbar-about">
        Follow Us and get a chance to win 80% off
      </div>
      <div className="navbar-online-platforms">
        Follow Us :
        <img src="instagram-icon.png" alt="" className="navbar-icons" />
        <img src="youtube-icon.png" alt="" className="navbar-icons" />
        <img src="facebook-icon.png" alt="" className="navbar-icons" />
        <img src="twitter-icon.png" alt="" className="navbar-icons" />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
// Initialization for ES Users
import { Collapse, initMDB } from "mdb-ui-kit";
import * as mdb from "mdb-ui-kit"; // lib
window.mdb = mdb;
initMDB({ Collapse });

export const HomeNavbar2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary ">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <img src="title-logo.png" alt="" />
          </a>
          <div className="d-flex justify-content-evenly align-items-center w-25 ">
            <button
              data-mdb-collapse-init=""
              className="navbar-toggler"
              type="button"
              data-mdb-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
          <div className="collapse navbar-collapse w-50   " id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Shop
              </a>
              <a className="nav-link" href="#">
                About
              </a>
              <a className="nav-link ">Blog</a>
              <a className="nav-link ">Contact</a>
              <a className="nav-link ">Pages</a>
            </div>
          </div>
          <img
            src="search-icon.png"
            alt=" "
            style={{ height: "15px", width: "auto" }}
          />
          <img
            src="cart-icon.png"
            alt=""
            style={{ height: "15px", width: "auto" }}
          />
        </div>
      </nav>
    </div>
  );
};

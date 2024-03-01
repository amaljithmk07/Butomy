import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as mdb from 'mdb-ui-kit'; // lib
window.mdb = mdb;


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);

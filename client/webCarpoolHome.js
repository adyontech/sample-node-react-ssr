import Cities from "../pages/home/web/jsx/index.jsx";
import React from "react";
import ReactDOM from "react-dom";
import styles from "../pages/home/web/scss/index.css";
import { GLOBAL_VERSION } from "../helpers/constants";

document.addEventListener(
  "DOMContentLoaded",
  function() {
    window.dataLayer = window.dataLayer || [];
    let data = JSON.parse(
      document.getElementById("dataDump").getAttribute("data"),
    );
    const x = React.createElement(Cities, {
      BreadCrumb: data.BreadCrumb,
      globalversion: GLOBAL_VERSION,
      data: data.pageData,
    });
    ReactDOM.render(x, document.getElementById("reactContentMount"));
  },
  false,
);

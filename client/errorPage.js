import ErrorPage from "../pages/layout/ErrorPage.jsx";
import React from "react";
import ReactDOM from "react-dom";
import styles from "../pages/layout/errorPage.css";
import { GLOBAL_VERSION } from "../helpers/constants";

document.addEventListener(
  "DOMContentLoaded",
  function() {
    let data = JSON.parse(
      document.getElementById("dataDump").getAttribute("data"),
    );
    var x = React.createElement(ErrorPage, {
      data: data.pageData,
      globalversion: GLOBAL_VERSION,
      city: data.city,
    });
    ReactDOM.render(x, document.getElementById("reactContentMount"));
  },
  false,
);

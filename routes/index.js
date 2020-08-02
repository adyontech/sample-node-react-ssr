var express = require("express");
import React from "react";
import ReactDomServer from "react-dom/server";
import ErrorPage from "../pages/layout/ErrorPage.jsx";

var commonroutes = require("./commonRoutes.js");

// var robots = require('../controller/robots');
module.exports = function () {
  var router = commonroutes();
  router.get("*", function (req, res) {
    var ErrorData = {
      message: "sorry cannot load data currently,Please try after sometime.",
    };
    res.render("errorPage", {
      pageData: JSON.stringify({ pageData: ErrorData }),
      renderedHTML: ReactDomServer.renderToNodeStream(
        <ErrorPage data={ErrorData} />,
      ),
      title: "",
    });
  });

  //test
  return router;
};

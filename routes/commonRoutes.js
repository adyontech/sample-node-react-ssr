const express = require("express");
import homePageController from "../controller/pages/homePageCntrl.js";
import ProdListing from "../controller/api/prodListing.js";
module.exports = function () {
  var router = express.Router();

  router.get("/nayka", homePageController.index);
  router.get("/getData", ProdListing.getProdListing);

  return router;
};

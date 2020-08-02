import React from "react";
import ReactDomServer from "react-dom/server";
import WebHomeComp from "../../pages/home/web/jsx/index.jsx";
import axios from "axios";

class HomeController {
  constructor() {}
  async index(req, res, next) {
    const deviceType = res.locals.device;
    let response = await axios.get("http://localhost:4000/getData");
    let pageData = {
      data: response.data.data,
      title: "Nayka",
    };
    renderFunction(res, deviceType, pageData);
  }
}

function renderFunction(res, deviceType, value) {
  res.render("webCarpoolHome", {
    renderedHTML: ReactDomServer.renderToNodeStream(
      <WebHomeComp BreadCrumb={null} data={value} />,
    ),
    pageData: JSON.stringify({
      pageData: value,
    }),
    pageMetaData: value.pageMetaData,
  });
}

export default new HomeController();

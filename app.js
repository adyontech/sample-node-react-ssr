// require("newrelic");
const express = require("express");
(http = require("http")),
  (chalk = require("chalk")),
  (path = require("path")),
  (format = require("string-format")),
  (mongojs = require("mongojs")),
  (favicon = require("serve-favicon")),
  (moment = require("moment")),
  (fs = require("fs")),
  (compression = require("compression")),
  (https = require("https")),
  (ua = require("mobile-agent")),
  (cookieParser = require("cookie-parser"));
hoffman = require("hoffman");
bodyParser = require("body-parser");
const useragent = require("express-useragent");

hoffman.dust.config.whitespace = true;
require("babel-register")({
  presets: ["es2015", "react"],
});

//step2
var app = express();

//Step3:-setting views
app.locals.globalversion = 1005;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "dust");
app.engine("dust", hoffman.__express());
app.use(hoffman.stream);
app.use(compression());
app.use(useragent.express());

app.use("/r-pool", express.static(path.join(__dirname, "public")));
app.use(favicon(__dirname + "/public/favicon.ico"));

app.use(cookieParser());
/*End Stuff for HMR */
// app.use(bodyParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.json());

//step4:
//set up route config
var routes = require("./routes/index.js");
app.use("/", routes());

//setting config
config = require("./config/index");

app.get("*.js", function (req, res, next) {
  req.url = req.url + ".gz";
  res.set("Content-Encoding", "gzip");
  next();
});

process.on("unhandledRejection", error => {
  // Will print "unhandledRejection err is not defined"
  console.log(chalk.blue("unhandledRejection", error.message));
});

var port = config.PORT;
// var folderpath = __dirname;

//setting logger
logger = require("./log");
logger.info("logger started");

var server = app.listen(port, function () {
  console.log(chalk.blue("Express server listening on port " + port));
  console.log(
    chalk.blue(
      "Process " + process.pid + " is listening to all incoming requests",
    ),
  );
  // logger.info("Express server listening on port " + port);
});

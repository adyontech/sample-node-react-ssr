var env = process.env.NODE_ENV || "local";
// console.log('env : ' + env);
var config = require("./config." + env);
// console.log('NODE_ENV : ' + env);
module.exports = config;

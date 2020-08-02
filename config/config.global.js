var config = (module.exports = {});

config.env = "local";
config.hostname = "dev.example.com";
config.PORT = 4000;
//mongo database
config.mongo = {};
config.mongo.uri = process.env.MONGO_URI || "localhost:27017/";
//config.mongo.host = 'mongodb://bushireuser:bushirepa$$w0rd@10.4.20.101:27017/bushire';
config.mongo.host = "";
config.mongo.db = "";
config.mongo.collection = "";
config.mongo.user = "";
config.mongo.password = "";

// config["unsubscribeFoxUrl"] =
//   "http://10.7.1.235:8529/_db/rb-wheels/clm/unsubscribeClmFromEmail";
// config[
//   "userMailStatus"
// ] = `http://10.7.1.235:8529/_db/rb-wheels/clm/getClmSubscriptionStatus`;

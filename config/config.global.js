var config = (module.exports = {});

config.env = "local";
config.hostname = "dev.example.com";
config.PORT = 4000;
config.mongo = {};
config.mongo.uri = process.env.MONGO_URI || "localhost:27017/";
config.mongo.host = "";
config.mongo.db = "";
config.mongo.collection = "";
config.mongo.user = "";
config.mongo.password = "";

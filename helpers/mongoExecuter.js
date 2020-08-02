const config = require("../config/index.js");
const MongoClient = require("mongodb").MongoClient;
var url = "mongodb://" + config.mongo.host + config.mongo.db;

module.exports = {
  connectToServer: function (callback) {
    MongoClient.connect(url, function (err, db) {
      _db = db;
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
  findQuery: (query, selector = {}, fileName = "") => {
    const collection = _db.collection(`${config.mongo.collection}`);
    return new Promise((resolve, reject) => {
      collection.find(query, selector).toArray(function (err, doc) {
        if (err) {
          console.log(
            `error occured while executing: ${query} in file: ${fileName}`,
          );
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  },
};

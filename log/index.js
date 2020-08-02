var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new winston.transports.File({ filename: __dirname + '/debug.log'})
  ],
  exceptionHandlers: [
    new (winston.transports.Console)({ json: false, timestamp: true, level :'info' }),
    new winston.transports.File({ filename: __dirname + '/exceptions.log', json: false })
  ],
  exitOnError: false
});

module.exports = logger;



//tutorial
//Logging levels
//{ error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
//0 to 5 (highest to lowest -> priority)
//error messages are most important in priority.
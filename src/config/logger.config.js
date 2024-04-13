const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');

// allowedTransports defines where you want to print your logs , in a separate file or just console 
const allowedTransports = [];
// below is showing that we want our logs to show only in console.
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(

        winston.format.colorize(),
        // winston.format.simple()
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // second argument to the combine method , which defines what exactly going to be printed
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

// below transport configuration enables logging in mongodb database
allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs',
}));

allowedTransports.push(new winston.transports.File({
    filename: `app.log`
}))


const logger = winston.createLogger({
    format: winston.format.combine(

        winston.format.errors({ stack: true }),
        // first argument to the combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // second argument to the combine method , which defines what exactly going to be printed
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}: ${log.stack}`)
    ),
    transports: allowedTransports
});

module.exports = logger;
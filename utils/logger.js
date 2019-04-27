const log4js = require('log4js');
/* This method is used for creating ERROR logs in application log file */
const errorLog = (message, content) => {
    const logger = log4js.getLogger('appLogs');
    logger.addContext('logType', 'appLogs');
    const errorContent = {
        ErrorMessage: message,
        Error: content.stack ? content.stack : content,
    };
    return logger.error(JSON.stringify(errorContent));
};

module.exports = {
    errorLog
};
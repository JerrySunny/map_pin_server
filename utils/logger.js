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
/* This method is used for creating INFO logs in application log file */
const infoLog = (message, requestId) => {
    const logger = log4js.getLogger('appLogs');
    logger.addContext('logType', 'appLogs');
    const infoContent = {
      Message: message,
    };
    return logger.info(JSON.stringify(infoContent));
  };
module.exports = {
    errorLog,
    infoLog
};
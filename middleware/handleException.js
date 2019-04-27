const logger = require('../utils/logger');

module.exports = async (err, req, res, next) => {
    res.status(err.status || 500);
    if (!res.headersSent) {
        res.json({
            message: err.message,
            error: err.stack,
        });
    }
    logger.errorLog(err.message, err);
};

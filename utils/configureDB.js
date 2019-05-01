// Configuring the database
const config = require('../config/config');
const mongoose = require('mongoose');
const logger = require('../utils/logger');

const configure = async () => {
    try {
        mongoose.Promise = global.Promise;
        // Connecting to the database
        await mongoose.connect(config.databaseUrl, {
            useNewUrlParser: true
        });
        logger.infoLog("Successfully connected to the database");
    }
    catch (err) {
        logger.errorLog('Could not connect to the database. Exiting now...', err);
        process.exit();
    }
}
module.exports = {
    configure
};
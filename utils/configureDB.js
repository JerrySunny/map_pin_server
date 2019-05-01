// Configuring the database
const config = require('../config/config');
const mongoose = require('mongoose');

const configure = () => {
    mongoose.Promise = global.Promise;
    console.log(config);
    // Connecting to the database
    mongoose.connect(config.databaseUrl, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
}
module.exports = {
    configure
};
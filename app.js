const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const log4js = require('log4js');
const logging = require('./config/logging');
const handleException = require('./middleware/handleException');

// logging configuration
log4js.addLayout('json', config => logEvent => JSON.stringify(logEvent) + config.separator);
log4js.configure(logging.development);

const app = express();

const index = require('./routes/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const corsOptions = { optionsSuccessStatus: 200 };

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

//routes
app.use('/', index);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
// Exception handler
app.use(handleException);
module.exports = app;
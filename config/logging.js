
const development = {
    appenders: {
        audit: {
            type: 'stdout',
            layout: { type: 'json', separator: ',' },
        },
        appLogs: {
            type: 'stdout',
            layout: { type: 'json', separator: ',' },
        },
    },
    categories: {
        default: { appenders: ['audit'], level: 'info' },
        appLogs: { appenders: ['appLogs'], level: 'debug' },
    },
};

module.exports = {
    development,
};

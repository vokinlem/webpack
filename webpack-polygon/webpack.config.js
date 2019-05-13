const fs = require('fs');
const dirs = fs.readdirSync(__dirname);

module.exports = function(env, args) {
    if (!args || !args['case-config']) {
        throw new Error('Try to use next syntax: npm run webpack-polygon -- --case-config config-import-module-1');
    }
    const configFileName = args['case-config'] + '.js';
    if (dirs.indexOf(configFileName) === -1) {
        throw new Error('Config "' + configFileName + '" is not existed in "' + __dirname + '"');
    }

    return require('./'+configFileName)(env, args);
};

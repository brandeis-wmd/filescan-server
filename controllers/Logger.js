'use strict';
var fs = require('fs');

exports.logger = function (req, res, next) {
    var components = [
        d,
        res.filename,
        res.numPages,
        res.numPagesChecked
    ];
    var logLine = components.join(' ');
    var log = generateLogPathFile();
    var pathFile = log[path] + '/' + log[file];
    fs.mkdirSync(log[path], {recursive: true}, (err) => {
        if (err) throw err;
    });
    fs.appendFile(pathFile, logLine, (err) => {
        if(err) throw err;
    });
    next();
}

function generateLogPathFile() {
    var dt = new Date().toISOString();

    var year = dt.getFullYear().toString();
    var rawMonth = dt.getMonth() + 1;
    var month = rawMonth.toString().padStart(2, '0');
    var day = dt.getDate().toString().padStart(2, '0');
    var fileNameParts = [
        'filescan',
        year,
        month,
        day
    ];
    var fileName = fileNameParts.join('-');
    // FIXME: hardcoding base like this is sub-optimal
    var logPathParts = [
        '/var/data/filescan/archive',
        year,
        month,
        filename
    ];
    var logPath = logPathParts.join('/');
    return {path: logPath, file: fileName};
}


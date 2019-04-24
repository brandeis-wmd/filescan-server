'use strict';
var fs = require('fs');

exports.logActivity = function (results, src) {
    var dt = new Date();
    var timestamp = dt.toString();
    var components = [
        timestamp,
        '"' + results.title + '"',
        src,
        results.numPages,
        results.numPagesChecked
    ];
    var logLine = components.join(' ');
    logLine += '\n';
    var log = generateLogPathFile(dt);
    var pathFile = log['path'] + '/' + log['file'];
    validatePath(log['path']);
    fs.appendFile(pathFile, logLine, (err) => {
        if(err) throw err;
    });
    console.log(logLine);
}

function generateLogPathFile(dt) {
    var year = dt.getFullYear().toString();
    var rawMonth = dt.getMonth() + 1;
    var month = rawMonth.toString();
    if(month.length < 2) {
        month = '0' + month;
    } 
    var day = dt.getDate().toString();
    if(day.length < 2) {
        day = '0' + day;
    } 
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
        month
    ];
    var logPath = logPathParts.join('/');
    return {path: logPath, file: fileName};
}

function validatePath(p) {
    var pathParts = p.split('/');
    var currentPath = '/';
    for(var i = 0; i < pathParts.length; i++) {
        if(pathParts[i].length < 1) {
            continue;
        }
        currentPath += pathParts[i] + '/';
        if(! fs.existsSync(currentPath)) {
            fs.mkdirSync(currentPath);
        }
    }
    return true;
}


const fs = require('fs');

function getFiles(path) {
    try {
        return fs.readdirSync(`${__dirname}${path}`);
    } catch (e) {
        throw e;
    }
}

module.exports = getFiles;
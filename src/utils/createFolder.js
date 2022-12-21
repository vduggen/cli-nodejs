const fs = require('fs');

function createFolder(path) {
    try {
        fs.mkdirSync(`${__dirname}${path}`, {
            recursive: true
        });
    }  catch (e) {
        throw e;
    }
}

module.exports = createFolder;
const fs = require('fs');

function createFile(path, content = '') {
    try {
        fs.writeFileSync(`${__dirname}${path}`, content);
    }  catch (e) {
        throw e;
    }
}

module.exports = createFile;
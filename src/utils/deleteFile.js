const fs = require('fs');

function deleteFile(path) {
    try {
        const options = {
            recursive: true,
            force: true
        }; 
        fs.rmSync(`${__dirname}${path}`, options);
    } catch (e) {
        throw e;
    }
}

module.exports = deleteFile;
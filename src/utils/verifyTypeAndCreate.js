const createFile = require("./createFile");
const createFolder = require("./createFolder");

function verifyTypeAndCreate(key, path) {
    if (key === 'FOLDER') {
        createFolder(path);
    }

    if (key === 'FILE') {
        createFile(path);
    }
}

module.exports = verifyTypeAndCreate;
const createFolder = require("./createFolder");
const verifyTypeAndCreate = require("./verifyTypeAndCreate");
const itemsModule = require("../templates/itemsModule");

function createModule(name) {
    const basePath = `${process.env.PATH_TESTS}/${name}`;

    createFolder(basePath);

    for (const item of itemsModule) {
        const pathFolder = `${basePath}/${item.name}`;

        verifyTypeAndCreate(item.key);

        if (item.subitems) {
            for (const subitem of item.subitems) {
                const path = `${pathFolder}/${subitem.name}`;
                verifyTypeAndCreate(subitem.key, path);
            }
        }
    }
}

module.exports = createModule;
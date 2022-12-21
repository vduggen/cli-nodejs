const createFolder = require("./createFolder");
const verifyTypeAndCreate = require("./verifyTypeAndCreate");
const itemsModule = require("../templates/itemsModule");

function createSubitems(subitems, mainPath) {
    if (subitems) {
        for (const subitem of subitems) {
            const path = `${mainPath}/${subitem.name}`;
            verifyTypeAndCreate(subitem.key, path);
            createSubitems(subitem.subitems, path);
        }
    }
}

function createModule(name) {
    for (const item of itemsModule) {
        const mainPath = `${process.env.PATH_TESTS}/${name}`;
        if (item.name === 'main') {
            createFolder(mainPath);
            createSubitems(item.subitems, mainPath);        
        }
    }
}

module.exports = createModule;
const createFile = require('./createFile');
const getTemplate = require('./getTemplate');

function createStore(name) {
    const path = `${process.env.PATH_TESTS}/${name}.store.js`;
    const content = getTemplate('store.js');
    createFile(path, content);
}

module.exports = createStore;
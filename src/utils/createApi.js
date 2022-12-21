const getFiles = require('./getFiles');
const createFolder = require('./createFolder');
const createFile = require('./createFile');
const deleteFile = require('./deleteFile');
const getTemplate = require('./getTemplate');

function createApi(nameApi) {
    const basePathApi = `${process.env.PATH_TESTS}/api`;
    createFolder(basePathApi);
    const basePath = `${basePathApi}/${nameApi}`;
    deleteFile(basePath);
    createFolder(basePath);
    const filenames = getFiles('../../templates/api');
    for (const filename of filenames) {
        const nameWithoutExtension = filename.replace(/(.+)(.js)/, '$1');
        const mountFilename = `${nameApi}${nameWithoutExtension}.js`;
        const path = `${basePath}/${mountFilename}`;
        const content = getTemplate(`api/${filename}`);
        const formattedContent = content.replace('[name]', nameApi);
        createFile(path, formattedContent);
    }
}

module.exports = createApi;
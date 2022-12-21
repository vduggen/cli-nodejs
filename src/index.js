const createApi = require('./utils/createApi');
const createModule = require('./utils/createModule');
const createStore = require('./utils/createStore');
const getParams = require('./utils/getParams');
require('dotenv').config();

try {
    const [key, value] = getParams();
    switch (key) {
        case '--store':
            createStore(value);
            break;

        case '--api':
            createApi(value);
            break;

        case '--module':
            createModule(value);
            break;
    
        default: throw `Parâmetro inválido`;
    }
} catch (e) {
    throw e;
}
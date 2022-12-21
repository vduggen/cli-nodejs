const fs = require('fs');
const pathNode = require('path');

function getTemplate(nameTemplate) {
    try {
        const path = pathNode.resolve(`src/templates/${nameTemplate}`);
        const content = fs.readFileSync(path);
        return content.toString();
    } catch (e) {
        throw e;
    }
}

module.exports = getTemplate;
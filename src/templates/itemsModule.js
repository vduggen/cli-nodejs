const item = require("../models/item");

const itemsModule = [
    {
        ...item('api', 'FOLDER'),
        subitems: [
            item('index.js', 'FILE')
        ]
    },
    item('views', 'FOLDER'),
    item('constants', 'FOLDER'),
    item('components', 'FOLDER'),
];

module.exports = itemsModule;
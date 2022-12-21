const item = require("../models/item");

const itemsModule = [
    item(
        'main',
        'FOLDER',
        [
            item('api', 'FOLDER', true),
            item('views', 'FOLDER', true),
            item('constants', 'FOLDER', true),
            item('components', 'FOLDER', true),
        ],
        true
    ),
];

module.exports = itemsModule;
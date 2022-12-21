function item(name, key, subitems, existIndex = false) {
    if (existIndex) {
        subitems = [
            subitems,
            {
                name: 'index.js',
                key: 'FILE'
            }
        ];
    }
    return {
        name,
        key,
        subitems
    }
}

module.exports = item;
function getNameWithoutExtension(filename) {
    return filename.replace(/(.+)(.js)/, '$1');
}

module.exports = getNameWithoutExtension;
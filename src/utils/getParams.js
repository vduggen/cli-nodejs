function getParams() {
    const params = process.argv;
    return params.slice(2);
}

module.exports = getParams;
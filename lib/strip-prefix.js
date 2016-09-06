const stripPrefix = (prefix, path) => path.replace(new RegExp('^' + prefix + '/?'), '')

module.exports = stripPrefix

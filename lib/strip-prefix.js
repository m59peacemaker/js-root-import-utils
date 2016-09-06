const escape = require('regexp.escape')

const stripPrefix = (prefix, path) => path.replace(new RegExp('^' + escape(prefix) + '/?'), '')

module.exports = stripPrefix

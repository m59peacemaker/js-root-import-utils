const escape = require('regexp.escape')

const hasPrefix = (prefix, path) => new RegExp('^' + escape(prefix) + '(/.*)?$').test(path)

module.exports = hasPrefix

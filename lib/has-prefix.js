const hasPrefix = (prefix, path) => new RegExp('^' + prefix + '/?.*').test(path)

module.exports = hasPrefix

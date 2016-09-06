const ensureIsModuleRelativePath = path => /^\.\.?\//.test(path) ? path : './' + path

module.exports = ensureIsModuleRelativePath

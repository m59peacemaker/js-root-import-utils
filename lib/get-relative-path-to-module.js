const {
  relative: getRelativePath,
  dirname: getDirname
} = require('path')
const ensureIsRelativeModulePath = require('./ensure-is-relative-module-path')
const addSlashToTrailingDoubleDots = require('./add-slash-to-trailing-double-dots')

const getRelativePathToModule = (sourcePathFromRoot, modulePathFromRoot) => {
  const sourceDirname = getDirname(sourcePathFromRoot)
  const relativePath = getRelativePath(sourceDirname, modulePathFromRoot)
  return addSlashToTrailingDoubleDots(ensureIsRelativeModulePath(relativePath))
}

module.exports = getRelativePathToModule

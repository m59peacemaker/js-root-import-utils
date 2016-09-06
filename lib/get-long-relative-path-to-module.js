const {
  join: joinPath,
  relative: getRelativePath,
  dirname: getDirname
} = require('path')
const ensureIsRelativeModulePath = require('./ensure-is-relative-module-path')
const addSlashToTrailingDoubleDots = require('./add-slash-to-trailing-double-dots')

const getLongRelativeModulePath = (sourcePathFromRoot, modulePathFromRoot) => {
  const sourceDirname = getDirname(sourcePathFromRoot)
  const relativePathToProjectRoot = getRelativePath(sourceDirname, './')
  const relativePath = joinPath(relativePathToProjectRoot, modulePathFromRoot)
  return addSlashToTrailingDoubleDots(ensureIsRelativeModulePath(relativePath))
}

module.exports = getLongRelativeModulePath

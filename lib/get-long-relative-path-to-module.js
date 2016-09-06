const path = require('path')
const getRelativePathToProjectRoot = require('./get-relative-path-to-project-root')
const ensureIsRelativeModulePath = require('./ensure-is-relative-module-path')

const getLongRelativeModulePath = (projectRoot, sourcePath, modulePathFromRoot) => {
  const relativePathToProjectRoot = getRelativePathToProjectRoot(projectRoot, sourcePath)
  const relativePath = path.join(relativePathToProjectRoot, modulePathFromRoot)
  return ensureIsRelativeModulePath(relativePath)
}

module.exports = getLongRelativeModulePath

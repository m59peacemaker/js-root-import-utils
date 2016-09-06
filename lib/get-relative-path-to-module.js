const path = require('path')
const getAbsoluteSourceDirname = require('./get-absolute-source-dirname')
const ensureIsRelativeModulePath = require('./ensure-is-relative-module-path')
const addSlashToTrailingDoubleDots = require('./add-slash-to-trailing-double-dots')

const getRelativePathToModule = (projectRoot, sourcePath, modulePathFromRoot) => {
  const absoluteRequirePath = path.join(projectRoot, modulePathFromRoot)
  const absoluteSourceDirname = getAbsoluteSourceDirname(projectRoot, sourcePath)
  const relativePath = path.relative(absoluteSourceDirname, absoluteRequirePath)
  return addSlashToTrailingDoubleDots(ensureIsRelativeModulePath(relativePath))
}

module.exports = getRelativePathToModule

const {
  relative: getRelativePath,
  dirname: getDirname
} = require('path')
const pipe = require('fj-pipe')
const ensureIsRelativeModulePath = require('./ensure-is-relative-module-path')
const addSlashToTrailingDoubleDots = require('./add-slash-to-trailing-double-dots')
const preserveTrailingSlash = require('./preserve-trailing-slash')

const getRelativePathToModule = (sourcePathFromRoot, modulePathFromRoot) => pipe(
  getDirname,
  (sourceDirname) => getRelativePath(sourceDirname, modulePathFromRoot),
  ensureIsRelativeModulePath,
  addSlashToTrailingDoubleDots,
  v => preserveTrailingSlash(modulePathFromRoot, v)
)(sourcePathFromRoot)

module.exports = getRelativePathToModule

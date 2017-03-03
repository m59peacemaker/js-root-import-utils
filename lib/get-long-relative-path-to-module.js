const {
  join: joinPath,
  relative: getRelativePath,
  dirname: getDirname
} = require('path')
const pipe = require('fj-pipe')
const ensureIsRelativeModulePath = require('./ensure-is-relative-module-path')
const addSlashToTrailingDoubleDots = require('./add-slash-to-trailing-double-dots')

const getLongRelativeModulePath = (sourcePathFromRoot, modulePathFromRoot) => pipe(
  getDirname,
  sourceDirname => getRelativePath(sourceDirname, './'),
  relativePathToProjectRoot => joinPath(relativePathToProjectRoot, modulePathFromRoot),
  ensureIsRelativeModulePath,
  addSlashToTrailingDoubleDots
)(sourcePathFromRoot)

module.exports = getLongRelativeModulePath

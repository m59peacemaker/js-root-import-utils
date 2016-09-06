const path = require('path')
const getAbsoluteSourceDirname = require('./get-absolute-source-dirname')
const addSlashToTrailingDoubleDots = require('./add-slash-to-trailing-double-dots')

const getRelativePathToProjectRoot = (projectRoot, sourcePath) => {
  const absoluteSourceDirname = getAbsoluteSourceDirname(projectRoot, sourcePath)
  const relativePath = path.relative(absoluteSourceDirname, projectRoot)
  return addSlashToTrailingDoubleDots(relativePath || './')
}

module.exports = getRelativePathToProjectRoot

const path = require('path')

// project root is absolute, sourcePath is relative
const getAbsoluteSourceDirname = (projectRoot, sourcePath) => {
  const sourceDirname = path.dirname(sourcePath)
  return path.isAbsolute(sourcePath) ? sourceDirname : path.join(projectRoot, sourceDirname)
}

module.exports = getAbsoluteSourceDirname

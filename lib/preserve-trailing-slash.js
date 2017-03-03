const hasTrailingSlash = str => str.substr(-1) === '/'
const preserveTrailingSlash = (subject, current) => {
  return hasTrailingSlash(subject) && !hasTrailingSlash(current) ? current + '/' : current
}

module.exports = preserveTrailingSlash

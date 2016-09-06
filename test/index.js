const test = require('tape')
const hasPrefix = require('../lib/has-prefix')
const stripPrefix = require('../lib/strip-prefix')
const ensureIsRelativeModulePath = require('../lib/ensure-is-relative-module-path')
//const getAbsoluteSourceDirname = require('../lib/get-absolute-source-dirname')
const getRelativePathToModule = require('../lib/get-relative-path-to-module')
//const getRelativePathToProjectRoot = require('../lib/get-relative-path-to-project-root')
const getLongRelativePathToModule = require('../lib/get-long-relative-path-to-module')
const utils = require('../')

test('hasPrefix', t => {
  t.plan(12)
  const has = path => hasPrefix('~', path)

  t.true(has('~'))
  t.true(has('~/'))
  t.true(has('~/a'))
  t.true(has('~/a/b.js'))

  t.false(has('/'))
  t.false(has('/a'))
  t.false(has('./'))
  t.false(has('./a'))
  t.false(has('a/b.js'))

  t.true(hasPrefix('^', '^/a'))
  t.false(hasPrefix('^', '/a'))
  t.true(hasPrefix('fr!end', 'fr!end/guy'))
})

test('stripPrefix', t => {
  t.plan(9)
  const strip = path => stripPrefix('~', path)
  t.equal(strip('~'), '')
  t.equal(strip('~/'), '')
  t.equal(strip('~/a'), 'a')
  t.equal(strip('~/a/b.js'), 'a/b.js')
  t.equal(strip('a/b'), 'a/b')
  t.equal(strip('/a'), '/a')
  t.equal(stripPrefix('^', '^/a'), 'a')
  t.equal(stripPrefix('fr!end', 'fr!end/'), '')
  t.equal(stripPrefix('fr!end', 'fr!end/guy'), 'guy')
})

test('ensureIsRelativeModulePath', t => {
  t.plan(8)
  const e = ensureIsRelativeModulePath
  t.equal(e(''), './')
  t.equal(e('.file'), './.file')
  t.equal(e('a'), './a')
  t.equal(e('a/b.js'), './a/b.js')
  t.equal(e('./'), './')
  t.equal(e('../'), '../')
  t.equal(e('./a'), './a')
  t.equal(e('../a'), '../a')
})

test('getRelativePathToModule', t => {
  t.plan(9)
  const g = getRelativePathToModule
  t.equal(g('a.js',     'b'     ), './b')
  t.equal(g('a/b/c.js', 'aa'    ), '../../aa')
  t.equal(g('a/b/c.js', 'd/e/f' ), '../../d/e/f')
  t.equal(g('a/b/c.js', 'a/b/cc'), './cc')
  t.equal(g('a/b/c.js', 'a/b'   ), './')
  t.equal(g('a/b/c.js', 'a/b.js'), '../b.js')
  t.equal(g('a/b/c.js', ''      ), '../../')
  t.equal(g('a/b/c.js', './'    ), '../../')
  t.equal(g('a/b/c.js', '../'   ), '../../../')
})

test('getLongRelativeModulePath', t => {
  t.plan(9)
  const g = getLongRelativePathToModule
  t.equal(g('a.js', 'b'), './b')
  t.equal(g('a/b/c.js', 'aa'), '../../aa')
  t.equal(g('a/b/c.js', 'd/e/f'), '../../d/e/f')
  t.equal(g('a/b/c.js', 'a/b/cc'), '../../a/b/cc')
  t.equal(g('a/b/c.js', 'a/b'), '../../a/b')
  t.equal(g('a/b/c.js', 'a/b.js'), '../../a/b.js')
  t.equal(g('a/b/c.js', ''), '../../')
  t.equal(g('a/b/c.js', './'), '../../')
  t.equal(g('a/b/c.js', '../'), '../../../')
})

test('utils (main module)', t => {
  t.plan(4)
  t.true(utils.hasPrefix('~', '~/a'))
  t.equal(utils.stripPrefix('~', '~/a'), 'a')
  t.equal(utils.getRelativePathToModule('a.js', 'b'), './b')
  t.equal(utils.getLongRelativePathToModule('a/b.js', 'c/d'), '../c/d')
})

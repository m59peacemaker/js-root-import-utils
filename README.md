# root-import-utils

Functions for transforming import/require paths that have a prefix referring to the project root.

## install

```sh
npm install root-import-utils
```

## usage

```js
const {
  hasPrefix,
  stripPrefix,
  getRelativePathToModule,
  getLongRelativePathToModule
} = require('root-import-utils')
```

## API

### `hasPrefix(prefix, path)`

```js
hasPrefix('~', '~/a/b.js') // -> true
```

- `prefix: string`
- `path: string`
- **returns**: `boolean`

### `stripPrefix(prefix, path)`

```js
stripPrefix('~', '~/a/b.js') // -> 'a/b.js'
```

- `prefix: string`
- `path: string`
- **returns**: `string` the path argument with prefix removed. The `/` after the prefix is also removed so that the remaining path is relative.

### `getRelativePathToModule(sourcePathFromRoot, modulePathFromRoot)`
### `getLongRelativePathToModule(sourcePathFromRoot, modulePathFromRoot)`

- `sourcePathFromRoot: string` relative path from project root to the file that has the import statement or require call
- `modulePathFromRoot: string` the module path of import/require with prefix removed so that it is a relative path from project root

`getLongRelativePathToModule()` simply prepends the relative path from sourcePathFromRoot to the project root to modulePathFromRoot, rather than calculating the most direct path from source to the target module. That means it will return a more verbose path in some situations. See the following example.

```js
getRelativePathToModule(    'a/b/c.js', 'a/b') // -> './'        // directly to module
getLongRelativePathToModule('a/b/c.js', 'a/b') // -> '../../a/b' // back to project root, forward to module
```

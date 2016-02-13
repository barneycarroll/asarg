# asarg
Executes the supplied function with `this` as the first argument. Example:

```js
const asarg = require('asarg')

const add = asarg( ( x, y ) => x + y )
assert.equal(add.call(1, 2), 3)
```

Note that `this` is kept unmodified.

```js
const asarg = require('asarg')

const add = asarg(function ( _, y ){ return this + y } )
assert.equal(add.call(1, 2), 3)
```

It also works very well with the [function bind proposal](https://github.com/zenparsing/es-function-bind):

```js
const asarg = require('asarg')

const concat = asarg( lists => [].concat( ...lists ) )
assert.deepEqual(
    [ [ 1, 2 ], [ 3 ], [ 4, 5, 6 ] ]::concat(),
    [ 1, 2, 3, 4, 5, 6 ] )
```

## License

MIT

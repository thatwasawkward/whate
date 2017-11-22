# Whate

Extremely simple module for getting a random value from an array. Completely indifferent.

## whate.ver(array)

Returns a completely random value from the array.

### Example

```javascript
const whate = require('whate')

const array = [
    'one',
    'two',
    'three'
]

const randomValue = whate.ver(array)

console.log(randomValue) // 'one', 'two', or 'three'
```

### Other stuff, in case you need it

**whate.str(array)**
Returns a random string.

**whate.num(array)**
Returns a random number.

**whate.int(array)**
Returns a random integer.

**whate.arr(array)**
Returns a random array.

**whate.obj(array)**
Returns a random non-array object.
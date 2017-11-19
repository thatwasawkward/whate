# Whate

Extremely simple module for getting a random value from an array. Completely indifferent.

## Example

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

## Main Method

### .ver(array)

Returns a random value of any type.

## Secondary Methods

### .str(array)

Returns a random string.

### .num(array)

Returns a random number.

### .int(array)

Returns a random integer.

### .arr(array)

Returns a random array.

### .obj(array)

Returns a random non-array object.
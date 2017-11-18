Extremely simple module for getting a random value from an array. Completely indifferent.

EXAMPLE:

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


## Methods

### .ver(array)
Returns a random value of any type.

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
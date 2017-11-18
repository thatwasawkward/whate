exports.ver = (x) => {
	return x[Math.floor(Math.random() * x.length)]
}

exports.str = (x) => {
	const strs = x.filter((s) => typeof s == 'string')
	return exports.ver(strs)
}

exports.num = (x) => {
	const nums = x.filter((n) => typeof n == 'number')
	return exports.ver(nums)
}

exports.int = (x) => {
	const ints = x.filter((i) => Number.isInteger(i) == true)
	return exports.ver(ints)
}

exports.arr = (x) => {
	const arrs = x.filter((a) => Array.isArray(a) == true)
	return exports.ver(arrs)
}

exports.obj = (x) => {
	const objs = x.filter((o) => typeof o == 'object' && o !== null && Array.isArray(o) == false)
	return exports.ver(objs)
}
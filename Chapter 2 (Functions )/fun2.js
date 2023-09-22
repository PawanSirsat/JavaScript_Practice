function add(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b
}

function operation(x, y, func) {
  return func(x, y)
}

let array = [operation, operation]

array[0] = operation(5, 4, add)
array[1] = operation(12, 2, sub)

console.log('Arrays [0] : ' + array[0])
console.log('Arrays [1] : ' + array[1])

const arrays = {
  name: 'pawan',
  lastname: 'sirsat',
  roll: 21,
  marks: array.concat([operation(24, 12, add)]),
  fun1: add,
  fun2: function () {
    console.log('Name == ' + arrays.name)
  },
}

console.log('Name == ' + arrays.name)

arrays.name = 'Atul'

let ans = operation(5, 3, add)
console.log('Return Value : ' + ans)

console.log('\n Arrays [2] : ' + arrays.marks[2])

console.log('Call Add : ' + arrays.fun1(2, 2))

arrays.fun2()

arrays.marks = arrays.marks.concat([operation(24, 24, add)])

console.log('\n Arrays [3] : ' + arrays.marks[3])

let a = 5
var b = '5'
if (a == b) {
  console.log('True !!!')
} else {
  console.log('False !!!')
}

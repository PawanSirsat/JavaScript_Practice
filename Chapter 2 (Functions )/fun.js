// 1. Normal (Named) Function
function add(x, y) {
  return x + y
}

// 2. Anonymous Function (Function Expression)
const subtract = function (x, y) {
  return x - y
}

// 3. Arrow Function (ES6+)
const multiply = (x, y) => x * y

// 4. Function with Default Parameters (ES6+)
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`)
}

// 5. Higher-Order Function (Accepts a Function as Argument)
function performOperation(x, y, operation) {
  return operation(x, y)
}

// Using the functions
console.log('1. Normal Function: ' + add(5, 3)) // Output: 8
console.log('2. Anonymous Function: ' + subtract(10, 4)) // Output: 6
console.log('3. Arrow Function: ' + multiply(2, 6)) // Output: 12
greet() // Output: Hello, Guest!
greet('Alice') // Output: Hello, Alice!
console.log('4. Default Parameters:')
console.log('   - Without name: ')
greet() // Output: Hello, Guest!
console.log('   - With name: ')
greet('Bob') // Output: Hello, Bob!

console.log('5. Higher-Order Function:')
const result1 = performOperation(8, 4, add)
const result2 = performOperation(8, 4, subtract)
console.log('   - Addition: ' + result1) // Output: 12
console.log('   - Subtraction: ' + result2) // Output: 4

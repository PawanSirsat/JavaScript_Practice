// Initialize an array
const fruits = ['apple', 'banana', 'cherry']

// Get the length of the array
const length = fruits.length
console.log('Array Length:', length)

// Convert the array to a string
const arrayToString = fruits.toString()
console.log('Array to String:', arrayToString)

// Remove the last element from the array
const popped = fruits.pop()
console.log('Popped Element:', popped)

// Add an element to the end of the array
fruits.push('date')
console.log('Array after Push:', fruits)

// Remove the first element from the array
const shifted = fruits.shift()
console.log('Shifted Element:', shifted)

// Add an element to the beginning of the array
fruits.unshift('apricot')
console.log('Array after Unshift:', fruits)

// Join array elements into a string with a custom separator
const joined = fruits.join(' - ')
console.log('Joined Array:', joined)

// Note: There is no "Array delete()" method; use `delete` statement instead.

// Concatenate two arrays
const moreFruits = ['fig', 'grape']
const combined = fruits.concat(moreFruits)
console.log('Concatenated Array:', combined)

// Flatten a nested array
const nestedArray = [
  [1, 2],
  [3, 4],
]
const flatArray = nestedArray.flat()
console.log('Flattened Array:', flatArray)

// Remove elements and/or add elements to the array using splice
fruits.splice(1, 2, 'kiwi', 'mango')
console.log('Array after Splice:', fruits)

// Create a shallow copy of a portion of the array
const slicedArray = fruits.slice(1, 4)
console.log('Sliced Array:', slicedArray)

// Create a new Set
const mySet = new Set()

// Add elements to the Set
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(4)

console.log('Set after adding elements:', mySet)

// Check if an element exists in the Set
const hasTwo = mySet.has(2)
console.log('Does the Set have 2?', hasTwo)

// Remove an element from the Set
mySet.delete(2)
console.log('Set after deleting 2:', mySet)

// Get the size of the Set
const setSize = mySet.size
console.log('Size of the Set:', setSize)

// Iterate through the Set using forEach
mySet.forEach((element) => {
  console.log('Element:', element)
})

// Clear all elements from the Set
mySet.clear()
console.log('Set after clearing:', mySet)

// Create a new Set with an initial array
const fruitSet = new Set(['apple', 'banana', 'cherry'])

// Iterate through the Set using for...of
console.log('Fruits in the Set:')
for (const fruit of fruitSet) {
  console.log(fruit)
}

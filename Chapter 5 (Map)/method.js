// Create a new Map
const myMap = new Map()
let names = {
  name: 'John',
  fun1: function (a, b) {
    return 'Addition : ' + (a + b)
  },
}
// Add key-value pairs to the Map
myMap.set('name', 'John')
myMap.set('age', 30)
myMap.set('city', 'New York')
myMap.set('fun', names)

console.log('Map after adding key-value pairs:', myMap)
console.log(myMap.get('fun').fun1(6, 3))
// Check if a key exists in the Map
const hasAge = myMap.has('age')
console.log("Does the Map have 'age' key?", hasAge)

// Get the value associated with a key
const name = myMap.get('name')
console.log('Name from the Map:', name)

// Get the size of the Map
const mapSize = myMap.size
console.log('Size of the Map:', mapSize)

// Iterate through the Map using forEach
myMap.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`)
})

// Delete a key-value pair from the Map
myMap.delete('city')
console.log("Map after deleting 'city' key:", myMap)

// Clear all key-value pairs from the Map
myMap.clear()
console.log('Map after clearing:', myMap)

// Create a new Map with an initial array of key-value pairs
const personMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
  ['city', 'Los Angeles'],
])

console.log('Add : ' + names.fun1(5, 6))
// Iterate through the Map using for...of
console.log('Key-Value Pairs in the Map:')
for (const [key, value] of personMap) {
  console.log(`Key: ${key}, Value: ${value}`)
}

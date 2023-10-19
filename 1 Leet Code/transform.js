function map(arr, fn) {
  const newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i))
  }
  return newArray
}

// Example usage:
const arr1 = [1, 2, 3]
const plusOne = function plusOne(n) {
  return n + 1
}
const newArray1 = map(arr1, plusOne) // [2, 3, 4]
console.log(newArray1)

const arr2 = [1, 2, 3]
const plusI = function plusI(n, i) {
  return n + i
}
const newArray2 = map(arr2, plusI) // [1, 3, 5]
console.log(newArray2)

const arr3 = [10, 20, 30]
const constant = function constant() {
  return 42
}
const newArray3 = map(arr3, constant) // [42, 42, 42]
console.log(newArray3)

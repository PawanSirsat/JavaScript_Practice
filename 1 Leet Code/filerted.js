var filter = function (arr, fn) {
  var filteredArr = []
  for (var i = 0; i < arr.length; i++) {
    console.log('\n ' + arr[i])

    if (fn(arr[i], i)) {
      filteredArr.push(arr[i])
      console.log(arr[i])
    }
  }
  return filteredArr
}

const arr1 = [0, 10, 20, 30]
const greaterThan10 = function greaterThan10(n) {
  return n > 10
}
const filteredArray1 = filter(arr1, greaterThan10) // [20, 30]
console.log(filteredArray1)

const arr2 = [1, 2, 3]
const firstIndex = function firstIndex(n, i) {
  return i === 0
}
const filteredArray2 = filter(arr2, firstIndex) // [1]
console.log(filteredArray2)

const arr3 = [-2, -1, 0, 1, 2]
const plusOne = function plusOne(n) {
  console.log('Check ' + (n + 1))
  return n + 1
}
const filteredArray3 = filter(arr3, plusOne) // [-2, 0, 1, 2]
console.log(filteredArray3)

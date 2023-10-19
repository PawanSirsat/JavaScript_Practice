/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let num = init
  for (let i = 0; i < nums.length; i++) {
    num = fn(nums[i], num)
  }
  return num
}

const nums1 = [1, 2, 3, 4]
fn1 = function sum(accum, curr) {
  return accum + curr
}
console.log('Output : ' + reduce(nums1, fn1, 0))

const nums2 = [1, 2, 3, 4]
fn2 = function sum(arr, num) {
  return num + arr * arr
}
console.log('Output2 : ' + reduce(nums2, fn2, 100))

const nums3 = []
fn3 = function sum(arr, num) {
  return 0
}
console.log('Output2 : ' + reduce(nums3, fn3, 25))

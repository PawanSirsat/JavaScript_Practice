var expect = function (val) {
  return {
    toBe: function (num) {
      if (val === num) {
        return true
      } else {
        throw new Error('Not Equal')
      }
    },
    notToBe: function (num) {
      if (val !== num) {
        return true
      } else {
        throw new Error('Equal')
      }
    },
  }
}

// Usage:
try {
  var result1 = expect(5).toBe(5)
  console.log(result1) // {"value": true}
} catch (error) {
  console.log({ error: error.message })
}

try {
  var result2 = expect(5).toBe(null)
  console.log(result2) // {"error": "Not Equal"}
} catch (error) {
  console.log({ error: error.message })
}

try {
  var result3 = expect(5).notToBe(null)
  console.log(result3) // {"value": true}
} catch (error) {
  console.log({ error: error.message })
}

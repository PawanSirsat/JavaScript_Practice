let globalnumber = 5

function add(a, b) {
  let result = a + b
  let globalnumber = 6

  function inner(result) {
    return result + globalnumber
  }

  return (result = inner(result))
}

console.log(add(1, 2))

let a = 0
let b = 1

console.log('\n Print num')

for (let index = 0; index < 5; index++) {
  console.log(display(index))
}

function display(a) {
  let ans = a * a
  return ans
}

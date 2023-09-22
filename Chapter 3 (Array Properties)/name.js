let food = [20, 32, 18, 63]
let gadget = [12, 29, 13, 42]

function getTotal(array) {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  if (total > 100) {
    console.log('Total is Too Must : ' + total)
    return total
  }
  console.log('Good  : ' + total)
  return total
}

let foodtotal = getTotal(food)
let gadgettotal = getTotal(gadget)
let randtotal = getTotal([25, 32, 21, 9])

console.log({
  foodtotal: foodtotal,
  gadget: gadgettotal,
  randtotal: randtotal,
})

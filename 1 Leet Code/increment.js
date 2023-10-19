var createCounter = function (init) {
  const val = init
  return {
    increment() {
      return ++init
    },
    decrement() {
      return --init
    },
    reset() {
      init = val
      return init
    },
  }
}

const counter = createCounter(5)
console.log('Orginial ' + 5)

console.log('-- ' + counter.decrement())

console.log('++ ' + counter.increment())
console.log('++ ' + counter.increment())

console.log('reset ' + counter.reset())
console.log('++ ' + counter.increment())
console.log('++ ' + counter.increment())

const people = [
  { name: 'Pawan', age: 25, position: 'Developer' },
  { name: 'Atul', age: 18, position: 'Tester' },
  { name: 'Rohit', age: 27, position: 'Developer' },
  { name: 'Nayan', age: 21, position: 'Frontend Developer' },
  { name: 'Pawan', age: 27, position: 'Tester' },
]

let age = people.filter(function (person) {
  return person.age >= 21
})

let position = people.filter(function (person) {
  return person.position == 'Developer'
})

let find = people.filter(function (person) {
  return person.name === 'Pawan'
})

age.forEach(function (person) {
  console.log(`Name : ${person.name}`)
})

console.log(`\n Developer Position : `)
position.forEach(function (person) {
  console.log(`Name : ${person.name}`)
})

console.log(`\n Find By Name : `)
console.log(find)

// find.forEach(function (person) {
//   console.log(person)
// })

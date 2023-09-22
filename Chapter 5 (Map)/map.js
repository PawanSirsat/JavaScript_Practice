const people = [
  { name: 'Pawan', age: 25, position: 'Developer' },
  { name: 'Atul', age: 18, position: 'Tester' },
  { name: 'Rohit', age: 27, position: 'DataBase Eng' },
  { name: 'Nayan', age: 21, position: 'Frontend Developer' },
]

let names = people.map(function (person) {
  return person.name
})

let age = people.map(function (person) {
  return person.age
})
let position = people.map(function (person) {
  return person.position
})

console.log(names)
console.log(age)
console.log(position)

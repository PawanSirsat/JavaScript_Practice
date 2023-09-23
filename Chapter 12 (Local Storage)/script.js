// Store an array of objects with more information
const peopleArray = [
  {
    name: 'Rohit',
    age: 30,
    city: 'New York',
  },
  {
    name: 'Pawan',
    age: 25,
    city: 'Los Angeles',
  },
  {
    name: 'John',
    age: 28,
    city: 'Chicago',
  },
]

// Store the array as a JSON string in localStorage
localStorage.setItem('people', JSON.stringify(peopleArray))

// Retrieve the array and parse it back to JavaScript objects
const storedPeople = JSON.parse(localStorage.getItem('people'))

// Loop through the array and log each person's information
storedPeople.forEach((person) => {
  console.log(`Name: ${person.name}`)
  console.log(`Age: ${person.age}`)
  console.log(`City: ${person.city}`)
  console.log('---')
})

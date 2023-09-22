const friend1 = 'pawan'
const friend2 = 'nayan'
const friend3 = 'golu'

const friend = [friend1, friend2, friend3]

//Arrays
var college = ['MIT', 'Bharati Vidhyapeeth', 'NIT']

console.log('\nCollge Array in Console: -\n\n' + college)

console.log('\nCollge Array With ForEach: -')
//Show Using ForEach Loop
college[1] = 'mit'
college.forEach((c) => {
  console.log(c)
})
console.log('\n')

console.log('\nFriends Array :-')
friend.forEach((friends) => {
  console.log(friends)
})

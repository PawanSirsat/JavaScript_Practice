const name = ['Pawan', 'Atul', 'Golu']
const surname = 'Sirsat'
name.reverse()
name.push('nayan')
console.log(name)

// Print Array Name in for loop
for (let i = 0; i < name.length; i++) {
  console.log(name[i])
}

//String Print Char in For loop
let name2 = 'PawanGajanaSirsat'
for (let i = 0; i < 10; i++) {
  console.log(name2[i])
}

let name3 = []

for (let i = 0; i < name.length; i++) {
  console.log(i + ' ')
  console.log(name[i])
  name3.push(`${name[i]} ${surname}`)
}

for (let i = 0; i < name3.length; i++) {
  console.log(name3[i])
}

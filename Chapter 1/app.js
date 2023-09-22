// document.write('<h1>hello world</h1>')
// alert('Hello')
// console.log('Hello')

// document.write({ name: 'pawan' })
// alert({ name: 'pawan' })
// console.log({ name: 'pawan' })

var name = 'pawan'
name = 'atul'
var name = 'at'
console.log(name)
console.log(typeof name)

let n1 = 'vaibhav'
n1 = 'sahil'
console.log(n1)

const name2 = 'nayan'
// name2 = 'pratik'
console.log(name2)

var names = ['John', 'Alice', 'Bob', 'Eva', 'David']

// Loop through the array and print the names in a table
for (var i = 0; i < names.length; i++) {
  var row = document.createElement('tr')

  var serialNumberCell = document.createElement('td')
  serialNumberCell.textContent = i + 1

  var nameCell = document.createElement('td')
  nameCell.textContent = names[i]

  row.appendChild(serialNumberCell)
  row.appendChild(nameCell)

  document.querySelector('tbody').appendChild(row)
}

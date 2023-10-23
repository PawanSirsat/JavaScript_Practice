const keyValueMap = new Map([
  ['name', 'Pawan'],
  ['date', '21'],
])

const obj1 = {
  name: 'Pawan',
  date: '21',
}

// Access the values using keys
console.log(keyValueMap.get('name')) // Output: "Pawan"
console.log(keyValueMap.get('date')) // Output: "21"

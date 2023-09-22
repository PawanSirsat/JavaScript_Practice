document.body.style.backgroundColor = 'Blue'
document.getElementById('btn1').style.backgroundColor = 'orange'

const btn2 = document.getElementById('btn2')

btn2.style.backgroundColor = 'pink'
btn2.style.color = 'white'

// console.log(btn2)

const li = document.getElementsByTagName('li')

const better = ['White', 'orange', 'yellow', 'Pink']
const Name = ['Pawan', 'Golu', 'Nayan', 'Abhi']

// for (let i = 0; i < li.length; i++) {
//   const liText = li[i].textContent
//   console.log(liText)
// }

var num = 'Pawan'
var num = True
const liElements = document.getElementsByTagName('li')
for (let i = 0; i < liElements.length; i++) {
  liElements[i].style.fontSize = '30px'
}

Array.from(liElements).forEach((li, index) => {
  console.log(li.textContent)
  li.style.color = better[index]
  console.log(Name[index])
})

const query1 = document.querySelectorAll('li')

console.log('\n')
query1.forEach((li) => {
  console.log(li.textContent)
})

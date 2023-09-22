const ele1 = document.getElementById('first')
const ele2 = document.getElementById('second')
const ele3 = document.getElementById('third')
const ele4 = document.getElementById('fourth')
const ele5 = document.getElementById('fifth')

console.log(ele1.className)

ele1.className = 'color2 text2'
ele2.className = 'color text'
ele3.className = 'color2 text2'
ele4.className = 'color text'
ele5.className = 'color2 text2'

const bodyDiv = document.createElement('div')
const text = document.createTextNode('a simple body div')
bodyDiv.appendChild(text)
document.body.appendChild(bodyDiv)

console.log(ele1.textContent)

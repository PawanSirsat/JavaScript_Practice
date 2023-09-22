const first = document.querySelector('.first')

first.nextSibling.nextSibling.style.background = 'blue'
first.nextSibling.nextSibling.style.color = 'red'
console.log(first.nextSibling)

const last = document.querySelector('.last')

last.previousSibling.previousSibling.style.background = 'red'
last.previousElementSibling.style.color = 'blue'

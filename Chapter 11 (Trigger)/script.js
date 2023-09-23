const link = document.querySelector('#link')
const button = document.querySelector('.btn')

button.addEventListener('mouseenter', function (event) {
  console.log(event.target.className) // Use className instead of classname
  if (event.target.className === 'btn') {
    event.currentTarget.className = 'btn2'
  } else {
    event.currentTarget.className = 'btn'
    // event.currentTarget.classList.add('btn')
    // event.currentTarget.classList.remove('btn2')
  }
  console.log(link.textContent)
})

button.addEventListener('mouseleave', function (event) {
  console.log(event.target.className) // Use className instead of classname
  if (event.target.className === 'btn') {
    event.currentTarget.className = 'btn2'
  } else {
    event.currentTarget.className = 'btn'
    // event.currentTarget.classList.add('btn')
    // event.currentTarget.classList.remove('btn2')
  }
  console.log(link.textContent)
})

function fun(event) {
  event.preventDefault()
}

link.addEventListener('click', fun)

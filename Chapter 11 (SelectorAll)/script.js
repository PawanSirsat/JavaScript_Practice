const buttons = document.querySelectorAll('.link')

const container = document.querySelector('.container')
const itemlist = document.querySelector('.itemlist')

function showBubbling(e) {
  console.log(' Target : ', e.target)
  console.log(' Current Target : ', e.currentTarget)
  if (e.currentTarget.className == 'link') {
  }
  e.target.style.color = 'red'
  e.currentTarget.style.border = '2px solid'
  e.currentTarget.style.display = 'inline-block'
  e.currentTarget.style.margin = '30px'
  e.currentTarget.style.textDecoration = 'none'

  e.currentTarget.style.boxShadow = 'rgb(70 0 255 / 55%) 0px 0px 20px 6px'
}

container.addEventListener('click', showBubbling)
itemlist.addEventListener('click', showBubbling)

function changeColor() {
  // Get a random color (you can use any color generation method here)
  const randomColor = 'r'

  // Apply the color to all buttons
  buttons.forEach((button) => {
    button.style.border = '2px solid black'
    button.style.display = 'inline-block'
    button.style.margin = '10px'
    button.style.width = 'auto'
    button.style.boxShadow = 'rgb(255 0 83 / 55%) 1px 0px 14px 6px'
  })
}

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', changeColor)
})

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e.currentTarget)
    e.target.style.color = 'red'
  })
})

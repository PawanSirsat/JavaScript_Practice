const con = document.querySelector('.container')
const button = document.querySelector('.btn')
const initialColor = 'red' // Initial color for the heading

function addme() {
  const element = document.createElement('h2')
  element.textContent = 'Element Created'
  element.classList.add('heading')
  element.style.color = initialColor // Set the initial color
  con.append(element)
}

con.addEventListener('click', function (e) {
  if (e.target.classList.contains('heading')) {
    const heading = e.currentTarget
    const currentColor = heading.style.color

    heading.style.backgroundColor = 'blue'
  }
})

button.addEventListener('click', addme)

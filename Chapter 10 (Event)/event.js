const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')

const btnclass = document.querySelector('.btnclass')
const colorinput = document.getElementById('colorinput')

const para = document.querySelector('#style1')
const newbutton = document.createElement('button')
const para2 = document.createElement('p')

colorinput.addEventListener('keyup', function () {
  console.log(colorinput.value)
})
btn.addEventListener('click', function () {
  if (colorinput.value != '') {
    para.removeAttribute('class')
    para.textContent = `New Color ${colorinput.value}`
    para.classList.add(colorinput.value)

    console.log(para.className)
    // newbutton.className = 'btn2'
    // newbutton.textContent = 'Reset Color'
    // btn.insertAdjacentElement('afterend', newbutton)
    document.querySelector('.btn2').style.display = 'inline'

    btn2.addEventListener('click', function () {
      console.log('reset')
      para.textContent = 'Old Style'
      para.removeAttribute('class')
      // newbutton.remove()
      document.querySelector('.btn2').style.display = 'none'

      colorinput.value = '' // Reset the input field
    })
  } else {
    document.querySelector('.alert').style.display = 'flex'
    document.querySelector('.overlay').style.display = 'block'

    document.querySelector('#validalert').textContent = 'Enter Color'

    console.log('Enter Color')
  }
})

function hideAlert() {
  document.querySelector('.alert').style.display = 'none'
  document.querySelector('.overlay').style.display = 'none'
}

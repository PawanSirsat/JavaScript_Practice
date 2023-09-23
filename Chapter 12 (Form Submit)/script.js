const form = document.getElementById('form')
const name = document.getElementById('name')
const password = document.getElementById('password')

form.addEventListener('submit', function (e) {
  e.preventDefault() // Prevent the default form submission
  console.log('Form Submitted')
  console.log(name.value)
  console.log(password.value)
})

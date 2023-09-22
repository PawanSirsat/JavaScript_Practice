const showAlertButton = document.getElementById('showAlert')
const customAlert = document.getElementById('customAlert')
const closeAlertButton = document.getElementById('closeAlert')
const confirmAlertButton = document.getElementById('confirmAlert')

showAlertButton.addEventListener('click', () => {
  customAlert.classList.remove('hidden')
})

closeAlertButton.addEventListener('click', () => {
  customAlert.classList.add('hidden')
})

confirmAlertButton.addEventListener('click', () => {
  customAlert.classList.add('hidden')
})

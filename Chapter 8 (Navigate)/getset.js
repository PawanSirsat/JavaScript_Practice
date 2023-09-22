//getter
//setter
const link1 = document.querySelector('.first')
console.log(link1.getAttribute('id'))

const link2 = document.querySelector('#link')
const hreflink = link2.getAttribute('href')
console.log('Href : ' + hreflink)

const link3 = link2.nextElementSibling

const newlink = document.createElement('a')
newlink.setAttribute('href', hreflink)
newlink.textContent = link2.textContent

link3.parentNode.replaceChild(newlink, link3)

console.log(link3)

console.log('Javascript var, let, const')

//Blocked Scope Varibles
let a = 'pawan'
a = 'aniket'

const b = 56
b = 5
{
  let b = 'this'
  console.log(b)
}
console.log(a)
console.log(b)

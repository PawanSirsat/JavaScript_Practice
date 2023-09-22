function morning(name) {
  return `\nGood Morning ${name.toUpperCase()}`
}
function afternoon(name) {
  return `\nGood Morning ${name.repeat(2)}`
}

function disp(name, fun) {
  console.log(`Hello ${name}, Welcome To Microsoft ${fun(name)}`)
}

disp('Pawan', morning)
disp('Atul', afternoon)

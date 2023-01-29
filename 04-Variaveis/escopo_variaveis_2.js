// Demonstração de escopos de variáveis

function f1() {
  var a = 1
  b = 2
}

f1()

if (true) {
  var x = 41
  y = 42
  let z = 43
}

console.log(a)
console.log(b)

console.log(x)
console.log(y)
console.log(z)


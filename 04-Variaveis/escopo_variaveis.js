// Demonstração de escopos de variáveis

if (true) {
  var x = 41 // variável de escopo global ou local
  y = 42     // variável de escopo global
  let z = 43 // variável de escopo de bloco
}

console.log(x)
console.log(y)
console.log(z)


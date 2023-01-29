// declaração da função 
function somar1(n1, n2) {
  return n1 + n2;
}

// declaração da função como expressão
const somar2 = function(n1, n2) { return n1 + n2; };

// declaração da arrow function 
const somar3 = (n1, n2) => n1 + n2;

// chamada das funções 
console.log(somar1(1, 2));
console.log(somar2(1, 2));
console.log(somar3(1, 2));


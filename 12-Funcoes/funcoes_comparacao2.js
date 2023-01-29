// declaração da função 
function dizerOlaMundo1() {
  return 'Olá mundo!';
}

// declaração da função como expressão
const dizerOlaMundo2 = function() { return 'Olá mundo!'; };

// declaração da arrow function 
const dizerOlaMundo3 = () => 'Olá mundo!';

// chamada das funções 
console.log(dizerOlaMundo1());
console.log(dizerOlaMundo2());
console.log(dizerOlaMundo3());

// Saída: 
// Olá mundo!
// Olá mundo!
// Olá mundo!
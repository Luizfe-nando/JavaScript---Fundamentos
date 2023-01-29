// NOTA: constantes podem ser declaradas em caixa alta ou baixa, mas uma convenção comum é usar apenas caixa alta

// define PI como uma constante e lhe atribui o valor 3.14
const PI = 3.14;

// tentar atribuir novo valor para constante (TypeError)
PI = 20;

// a variável PI possui o valor 3.14
console.log("meu número favorito é: ", PI);

// tentar redeclarar a constante emite um erro:
// SyntaxError: Identifier 'PI' has already been declared
//const PI = 20;

// o nome PI está reservado para a constante acima, logo irá falhar
var PI = 20;

// isso também vai falhar
let PI = 20;

// const deve ser inicializada:
// SyntaxError: missing = in const declaration
const AUX;


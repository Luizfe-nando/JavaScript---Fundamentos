var a = 1; // variável global

function f1() {
  var b = 2; // variável local
  console.log("f1() - a:", a);
  console.log("f1() - b:", b);
}

function f2() {
  console.log("f2() - a:", a);
  console.log("f2() - b:", b); // Erro
}

f1();
f2();

console.log("a:", a);
console.log("b:", b); // Erro


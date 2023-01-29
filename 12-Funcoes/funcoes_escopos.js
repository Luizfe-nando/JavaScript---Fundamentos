var a = 1; // variável global
b = 2;    // variável global

function f1() {
  console.log("f1(): a:", a);
  console.log("f1(): b:", b);
}

console.log("a:", a);
console.log("b:", b);

f1();


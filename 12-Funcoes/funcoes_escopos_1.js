var a = 1; // variável global

function f1() {
  b = 2;  // variável global
  console.log("f1() - a:", a);
  console.log("f1() - b:", b);
}

function f2() {
  console.log("f2() - a:", a);
  console.log("f2() - b:", b);
}

f1();
f2();

console.log("a:", a);
console.log("b:", b);


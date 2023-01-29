var a = 1; // variável global

function f1() {
  var b = 2;  // variável local
  if (true) {
    let c = 3; // variável de bloco
    console.log("f1() - if - c:", c);
  }
  console.log("f1() - a:", a);
  console.log("f1() - b:", b);
  console.log("f1() - c:", c);
}

f1();



function mostrar_mensagem() {
  console.log("Mensagem dentro da função");
}

function calcular_produto(x, y, z) {
  console.log("Produto:", x * y * z);
}

function calcular_quociente(a, b) {
  return a / b;
}

// Chamada da função mostrar_mensagem
mostrar_mensagem();

// Chamada da função calcular_produto, passando 3 argumentos
calcular_produto(4, 7.5, 2.3);

// Chamada da função calcular_quociente, recebendo o retorno de valor
q = calcular_quociente(11, 5);


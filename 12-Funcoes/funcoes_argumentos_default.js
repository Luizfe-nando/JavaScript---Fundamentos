// Argumentos padrões (default)
// Dois parâmetros obrigatórios, 1 variável padrão
function calcular_area(x, y, z = 1) {
  area = x * y * z;
  return area;
}

raio = 2;
comprimento = 6;
largura = 9;

// Calcula área do círculo como raio x raio x pi
// Substitui o valor padrão de z (1) por pi = 3.14
area_circulo = calcular_area(raio, raio, 3.14);
console.log("Círculo", "\nRaio:", raio, "\nÁrea:", area_circulo);

// Calcula área do retângulo
// Passando comprimento e largura, apenas 2 argumentos
area_retangulo = calcular_area(comprimento, largura);
console.log("\n\nRetângulo", "\nComprimento:", comprimento, "\nLargura:", largura, "\nÁrea: ", area_retangulo);




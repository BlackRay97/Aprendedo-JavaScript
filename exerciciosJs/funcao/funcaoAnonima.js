const soma = function(x, y) {
    return x + y;
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 4);
imprimirResultado(9, 9, soma);
imprimirResultado(1, 5, function(a, b) { return a - b});
imprimirResultado(4, 8, (a, b) => a * b);   
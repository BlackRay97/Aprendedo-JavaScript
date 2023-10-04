function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

//A linguagem JavaScript é muito Flexível, permiti situações que em outras linguagem n permitiria
imprimirSoma(2);
imprimirSoma(3, 7, 5, 7, 1);
imprimirSoma();

function soma(a, b = 0) {
    return a + b;
}
//Valor padrão

console.log(soma(3, 7));
console.log(soma(3));
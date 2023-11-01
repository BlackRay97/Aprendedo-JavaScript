function media(numeros = []) {
    let soma = 0;
    numeros.forEach(e => {
        soma += e;
    });

    return soma / numeros.length;
}

console.log(`Media de ${[55, 6, 34, 12, 4]}: ${media([55, 6, 34, 12, 4])}`);
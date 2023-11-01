function maiorEMenor(numeros = []) {
    let maior = numeros[0];
    let menor = numeros[0];

    numeros.forEach((e) => {
        maior = e > maior ? e : maior;
        menor = e < menor ? e : menor;
    });

    return {maior, menor};
}

const result = maiorEMenor([7,8,2,8,12,5,1,23]);
console.log(`Maior numero: ${result.maior} - Menor numero: ${result.menor}`);
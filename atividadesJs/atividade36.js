function multiplicador(vetorNumeros, numero) {
    const vetorResult = [];

    vetorNumeros.forEach(e => {
        let resultado = e * numero;
        vetorResult.push(resultado);
    });

    return vetorResult;
}

console.log(multiplicador([3, 5, 7, 8], 5));

function multiplicador2(vetorNumeros, numero) {
    const vetorResult = [];

    vetorNumeros.forEach(e => {
        if(e > 5) {
            let resultado = e * numero;
            vetorResult.push(resultado);
        }
    });

    return vetorResult;
}

console.log(multiplicador2([3, 5, 7, 8], 5));
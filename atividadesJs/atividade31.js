function numeroNegativos(vetor = []) {
    let negativos = 0;
    vetor.forEach((e) => {
        if(e < 0) negativos++;
    })
    return negativos;
}

console.log(`Qtd de numeros negativos passado: ${numeroNegativos([-1,-3,9,4,7,-11])}`);
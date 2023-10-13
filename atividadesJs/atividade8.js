function analiseDeDesempenho(pontos) {
    let recordes = 0;
    let piorDesempenho = 0;
    let melhorDesempenho = pontos[0];

    pontos.forEach((elemento, indice, vetor) => {
        if(elemento > melhorDesempenho) {
            recordes++;
            melhorDesempenho = elemento;
        }else if(elemento > vetor[indice + 1]) {
            piorDesempenho = indice + 1;
        }
    });

    return [recordes, piorDesempenho];
}

console.log(analiseDeDesempenho([10, 5 ,30, 20]));
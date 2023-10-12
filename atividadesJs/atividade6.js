function jurosSimples(capital, juros, tempoPorMes) {
    return capital + (capital * juros) * tempoPorMes;
}

console.log(jurosSimples(500, 0.01, 15));

function jurosCompostos(capital, juros, tempoPorMes) {
    for(let i = 0; i< tempoPorMes; i++) {
        capital += capital * juros; 
    }
    return capital.toFixed(2);
}

console.log(jurosCompostos(500, 0.01, 15));
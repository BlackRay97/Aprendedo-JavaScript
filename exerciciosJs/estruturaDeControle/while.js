//Melhor forma de usar quando não se tem um numero determinado de vezes.
function numeroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.round(valor);
}

let opcao = 0;

while(opcao != -1) {
    opcao = numeroAleatorioEntre(-1, 10);
    console.log(opcao);
}
console.log("Até apróxima!");
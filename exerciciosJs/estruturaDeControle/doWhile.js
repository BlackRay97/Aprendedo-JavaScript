function numeroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.round(valor);
}

//Com essa estrutura DO While pelo menos uma vez é executado
let opcao = -1;

do{
    opcao = numeroAleatorioEntre(-1, 10);
    console.log(opcao);
}while(opcao != -1) 
console.log("Até apróxima!");
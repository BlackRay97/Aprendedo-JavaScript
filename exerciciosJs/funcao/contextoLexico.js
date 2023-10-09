const valor = 'Valor Fora';

function imprimirVar() {
    console.log(valor);
}

function QualValorImpresso() {
    let valor = 'Valor Dentro';    
    imprimirVar();
}

QualValorImpresso();
function porExtenso(numero) {
    
    let nome;
    switch(numero) {
        case 0:
            nome = "zero";
            break;
        case 1:
            nome = "um";
            break;
        case 2:
            nome = "dois";
            break;
        case 3:
            nome = "três";
            break;
        case 4:
            nome = "quatro";
            break;
        case 5:
            nome = "cinco";
            break;
        case 6:
            nome = "seis";
            break;
        case 7:
            nome = "sete";
            break;
        case 8:
            nome = "oito";
            break;
        case 9:
            nome = "nove";
            break;
        case 10:
            nome = "dez";
            break;
        default:
            nome = "numero não consta no intervalo";
    }

    return nome.toUpperCase();
}

console.log(porExtenso(10));
console.log(porExtenso(5));
console.log(porExtenso(3));
console.log(porExtenso(11));


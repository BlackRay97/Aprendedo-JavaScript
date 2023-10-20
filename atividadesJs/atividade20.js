function cedulas(valor, cedula) {
    let contador = 0;
    while(valor >= cedula) {
        contador++;
        valor = valor - cedula;
    }

    return contador;
}

function qtdCedulas(valor) {

    console.log(`Valor: ${valor.toFixed(2)} R$`);

    if(cedulas(valor, 100)) {
        console.log(`${cedulas(valor, 100)} - nota(s) de 100 R$`);
        valor = valor - (cedulas(valor, 100) * 100);
    }

    if(cedulas(valor, 50)) {
        console.log(`${cedulas(valor, 50)} - nota(s) de 50 R$`);
        valor = valor - (cedulas(valor, 50) * 50);
    }

    if(cedulas(valor, 10)) {
        console.log(`${cedulas(valor, 10)} - nota(s) de 10 R$`);
        valor = valor - (cedulas(valor, 10) * 10);
    }

    if(cedulas(valor, 5)) {
        console.log(`${cedulas(valor, 5)} - nota(s) de 5 R$`);
        valor = valor - (cedulas(valor, 5) * 5);
    }

    if(cedulas(valor, 1)) {
        console.log(`${cedulas(valor, 1)} - nota(s) de 1 R$`);
        valor = valor - cedulas(valor, 1);
    }
}

qtdCedulas(182);
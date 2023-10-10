function transformaEmReal(valor) {
    if(valor >= 0) {
        console.log(`R$ ${valor.toFixed(2)}`);
    }else {
        console.log("Valor inválido passado para função.")
    }
}

transformaEmReal(0.30000000000004);
transformaEmReal(0.56777777777776);
transformaEmReal(0);
transformaEmReal(undefined);
transformaEmReal('a');
transformaEmReal();
function numerosImpares([inicio, fim] = [0, 100]) {
    if(inicio > fim) {
        [fim, inicio] = [inicio, fim];
    }

    while(inicio <= fim) {
        if(inicio % 2 != 0) {
            console.log(`${inicio}: Impar`);
        }
        inicio++;
    }
}

numerosImpares();
numerosImpares([2, 15]);
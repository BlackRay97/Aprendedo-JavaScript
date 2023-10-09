const marcas = ['Fiat', 'chevrolet', 'honda'];

function imprimirModelo(marca, indice) {
    console.log(`${indice} - ${marca}`);
}

marcas.forEach(imprimirModelo);
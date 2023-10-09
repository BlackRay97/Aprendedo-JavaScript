const notas = [5.5, 6.8, 7.9, 5, 8.4, 9];

//Sem callback
let notasBaixas = [];

for(let i in notas) {
    if(notas[i] < 7)
    notasBaixas.push(notas[i]);
}

console.log(notasBaixas);

//Usando callback

notasBaixas = notas.filter(nota => nota < 7);

console.log(notasBaixas);
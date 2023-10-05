const notas = [10, 4.7, 7.3, 6.9, 3.5];

for(let i = 0; i < notas.length; i++) {
    console.log(`i = ${i}`);
}

//Outra forma mais eficiente de percorrer um array e objetos
//For in
for(let i in notas) {
    console.log(`indice [${i}] : ${notas[i]}`);
}

//Percorrendo um obj
const pessoa = {
    nome: 'Ana',
    idade: 29,
    peso: 64
}

for(let atr in pessoa) {
    console.log(`${atr} = ${pessoa[atr]}`);
}
const vetorInteiro = [1, 2, 3, 4];
const vetorString = ['a', 'b', 'c', 'd'];
const vetorDouble = [1.2, 2.3, 3.4, 4.5];

const newVetor = vetorInteiro.concat(vetorString, vetorDouble);
console.log(`Primeira forma: ${newVetor}`);
console.log('Segunda forma: '.concat(vetorDouble).concat(vetorString).concat(vetorInteiro));
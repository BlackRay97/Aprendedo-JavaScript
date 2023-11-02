function trocaElemVetores(vetorA, vetorB) {
    if(vetorA.length === vetorB.length) {
        for(let i = 0; i < vetorA.length; i++) {
            vetorA.push(vetorB[i]);
            vetorB[i] = vetorA.shift();
        }
    }else {
        console.log("Vetores de tamanho diferente");
    }
}

const vetorA = [1,2,3,4,5];
const vetorB = [6,7,8,9,10];
trocaElemVetores(vetorA, vetorB);

console.log(vetorA, vetorB);
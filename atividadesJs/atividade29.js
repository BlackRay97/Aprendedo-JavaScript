function entre10a20(vetor = []) {
    let entreIntervalo = 0;
    let foraIntervalo = 0;

    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20) {
            entreIntervalo++;
        }else {
            foraIntervalo++;
        }
    }
    console.log(vetor);
    console.log(`${entreIntervalo} numeros estão dentro do intervalo de 10 a 20`);
    console.log(`${foraIntervalo} numeros estão fora do intervalo de 10 a 20`);
}

entre10a20([3, 6, 8, 12, 15, 11, 50, 23, 20]);
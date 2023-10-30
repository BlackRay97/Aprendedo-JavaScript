function numAleatorio(min, max) {
    if(min > max) [max, min] = [min, max]; //Construction
    const aleatorio = Math.random() * (max - min) + min;

    return Math.round(aleatorio);
}

function mediaDeAlunos() {
    let codigo = 0;
    let alunochamado;

    while(codigo !== -1 && alunochamado != codigo) {
        const nota1 = numAleatorio(0, 10);
        const nota2 = numAleatorio(0, 10);
        const nota3 = numAleatorio(0, 10);
        let maior = nota1;
        let media;

        //Verificar qual é a nota maior
        maior = nota2 > maior ? nota2 : maior;
        maior = nota3 > maior ? nota3 : maior;

        switch(maior) {
            case nota1:
                media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / (4 + 3 + 3);
                break;
            case nota2:
                media = ((nota2 * 4) + (nota1 * 3) + (nota3 * 3)) / (4 + 3 + 3);
                break;
            case nota3:
                media = ((nota3 * 4) + (nota2 * 3) + (nota1 * 3)) / (4 + 3 + 3);
                break;
        }

        console.log(`Codigo: ${codigo} - notas: ${nota1}, ${nota2}, ${nota3} - media: ${media}`);
        console.log(`Situação: ${media >= 5 ? "Aprovado" : "Reprovado"}`);
            
        alunochamado = codigo;
        codigo = numAleatorio(-1, 4);
    }

}

mediaDeAlunos();
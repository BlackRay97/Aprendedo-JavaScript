function soma() {
    //Toda função tem atributo chamado arguments
    //arguments armazena todas as variáveis passada para função
    let soma = 0;
    for(let i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1, 2, 3));
console.log(soma('a', 'b', 'c'));
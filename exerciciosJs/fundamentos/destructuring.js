//Recurso novo ES2015

const pessoa = {
    nome: 'Ana',
    idade: 22,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome , idade} = pessoa;

console.log(nome, idade);

//Se caso tentar extrair um atributo que não existe , JS vai retornar Underfined

const { sobrenome, bemHumorado = true} = pessoa;
console.log(sobrenome, bemHumorado);

const { endereco: { logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);
//Coleção dinâminca de chave valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['descricao do produto'] = 'Moldura em madeira';
produto.preco = 53.99;

console.log(produto);

//Deletar dinâmicamente um atributo

delete produto['descricao do produto'];
delete produto.preco;

console.log(produto);

//Objeto mais complexo

const carro = {
    modelo: 'A4',
    preco: 89000,
    proprietario: {
        nome: "Raul",
        idade: 23,
        endereco: {
            logradouro: "Rua ABC",
            numero: 12,
        },
        condutores: [{
            nome: "Fernando",
            idade: 29
        }, {
            nome: "Maria",
            idade: 33
        }]
    }
}

console.log(carro);
function getPreco(moeda = 'R$', imposto = 0) {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: "Notebook",
    preco: 500,
    desc: 0.2,
    getPreco
}

console.log(produto.getPreco());

const carro = {nome: "Uno Mille", preco: 10999.99, desc: 0.1};

console.log(getPreco.apply(carro, ['R$', 0.3]));
console.log(getPreco.call(carro, '$$', 0.1));
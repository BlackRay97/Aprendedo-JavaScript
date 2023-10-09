function criarProduto(nome, preco) {
    const desc = 0.2;
    return {
        nome,
        preco,
        desconto: (preco - desc * preco).toFixed(2)
    }
}

const prod1 = criarProduto("cadeira", 54.99);
console.log(prod1);
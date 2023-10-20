//Função fabrica
function criaProduto(nome, preco) {
    
    const getProduto = function() {
        console.log(`${nome} - ${preco.toFixed(2)} R$`);
    }

    return {nome, preco, getProduto}
}

//"Banco de dados"
const listaDeProduto = [];

function addProdNaLista(nome, preco) {
    listaDeProduto.push(criaProduto(nome, preco));
    addCondigoAoProduto();
}

function addCondigoAoProduto() {
    listaDeProduto.forEach((produto, index) => {
        if(!produto.codigo) {
            produto.codigo = (index + 1) * 100;
        }
    })
}

function exibePrecoFinal(indice, qtd) {
    console.log(`${listaDeProduto[indice].nome} - ${listaDeProduto[indice].preco}`);
            console.log(`Valor a pagar: ${listaDeProduto[indice].preco * qtd}`);
}

//Adicionando produtos no cardápio
addProdNaLista("Fanta uva", 5.50);
addProdNaLista("Fanta laranja", 5.50);
addProdNaLista("x-salada", 6.50);
addProdNaLista("x-tudo", 8.50);

function compra(codigo, qtd) {
    switch(codigo) {
        case listaDeProduto[0].codigo:
            exibePrecoFinal(0, qtd);
            break;
        case listaDeProduto[1].codigo:
            exibePrecoFinal(1, qtd)
            break; 
        case listaDeProduto[2].codigo:
            exibePrecoFinal(2, qtd)
            break; 
        case listaDeProduto[3].codigo:
            exibePrecoFinal(3, qtd)
            break; 
        default:
            console.log("Código inválido");   
    }
}

compra(100, 2);
compra(500, 2);
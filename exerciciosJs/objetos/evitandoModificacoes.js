//Object.preventExtensions
//Evita que o objeto criado seja extensível ou seja não permite a criação de novos atributos
const produto = Object.preventExtensions({
    nome: "Lápis", preco: 1.99, tag: "material escolar"
});
console.log(Object.isExtensible(produto));
//Verifica se um objeto foi criado com a função preventExtensions

produto.nome = "borracha"; 
delete produto.tag;
produto.descicao = "material feito de resina plastica";

console.log(produto);

//Seal
//Selado
//Não pode criar novos valores e nem deletar

const produto2 = Object.seal({nome: "caneta", preco: 3.50});
produto2.tag = 'caneta esfereografica preta';
delete produto2.nome;
produto.preco = 2.5;
console.log(produto2);
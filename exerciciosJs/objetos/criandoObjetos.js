//Forma literal de objetos
const obj1 = {};
console.log(obj1);

//Função Object do JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

//Função construtora;
function produto(nome, preco, desc) {
    //Visivel para fora do objeto
    this.nome = nome;

    this.getPrecoComDesc = function() {
        return  preco * (1 - desc);
    }
}

const p1 = new produto("Televisão", 2400.99, 0.10);
const p2 = new produto("Notebook", 1599.99, 0.15);

console.log(p1.getPrecoComDesc(), p2.getPrecoComDesc());

//Função Factory
//Padrão de projeto

function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalarioBase() {
            return (salario / 30) * (30 - faltas);  
        }
    }
}

const f1 = new criarFuncionario("João", 2000, 5);
const f2 = new criarFuncionario("Maria", 10500, 3);
console.log(f1.getSalarioBase(), f2.getSalarioBase());

//Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

//Com JSON
const objetoJSON = JSON.parse('{"nome": "Pedro"}');
console.log(objetoJSON.nome);
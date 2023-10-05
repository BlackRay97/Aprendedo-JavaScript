//Forma literal para declarar uma função
function func1() {}

//Armazenando em uma variavel
const func2 = function() {}

//Em um array
const funcsArray = [function(a, b) {return a + b}, func1, func2];
console.log(funcsArray[0](1,2));

//Armazenando em um objeto
const pessoa = {}
pessoa.falar = function() {return 'Opa!'}
console.log(pessoa.falar());

//Passando como parametro para um função

function run(fun) {
    //Executando a função
    fun();
}

//Não estou execuntando a função passada com param aqui.
run(function() {console.log("Executando...")});

//Tbm é possível retornar uma função

function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}

soma(1, 5)(6);
//Ou
const result = soma(1, 5);
result(6);
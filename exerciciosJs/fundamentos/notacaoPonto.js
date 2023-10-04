console.log(Math.ceil(6.3));

const Obj1 = {};
Obj1.nome = 'Mesa';
console.log(Obj1.nome);


function Obj2(nome) {
    this.nome = nome;
    //let preco = 35.99; só é visível no contexto da função.
}

const Obj3 = new Obj2('cadeira');
console.log(Obj3.nome);
//console.log(Obj3.preco); Não acontece um erro mas retorna underfined
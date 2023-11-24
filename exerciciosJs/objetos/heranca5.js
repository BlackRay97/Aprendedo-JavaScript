//Simulando a palavra reservada NEW
function novo(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

function Aula(nome, id) {
    this.nome = nome;
    this.id = id;
}

const aula1 = novo(Aula, "portugues", 123);
console.log(aula1);
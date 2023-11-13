const ferrari ={
    modelo: 'f14',
    velMax: 340
}

const volvo = {
    modelo: 'A4',
    velMax: 200
}

console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

//Toda função tem um atributo prototype

console.log(typeof Object, typeof Object.prototype);

function meuObjeto() {}

console.log(typeof meuObjeto.prototype);
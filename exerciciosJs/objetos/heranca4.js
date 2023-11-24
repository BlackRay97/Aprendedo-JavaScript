function meuObjeto() {} //Função construtora

const obj1 = new meuObjeto();
const obj2 = new meuObjeto();

console.log(obj1.__proto__ === obj2.__proto__);
console.log(meuObjeto.prototype === obj1.__proto__);

//Resumindo a loucura
console.log(new meuObjeto().__proto__ === meuObjeto.prototype);
console.log(meuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
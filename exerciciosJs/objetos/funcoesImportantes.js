const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 12
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '23/05/1995'
});

pessoa.dataNascimento = '11/12/12';
console.log(pessoa);

//Object.assign ECMAScript 2015

const dest = {};
const obj1 = {a: 1};
const obj2 = {b: 2};
const obj3 = {c: 3, a: 4}

Object.assign(dest, obj1, obj2, obj3);
console.log(dest);
const pai = { corDoCabelo: 'preto', nome: 'Pedro'};

const filha1 = Object.create(pai);
filha1.nome = 'Bia';
console.log(filha1.corDoCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Carla', writable: false, enumerable: true}
});

console.log(filha2.nome);
filha2.nome = "Ana";
console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);
}
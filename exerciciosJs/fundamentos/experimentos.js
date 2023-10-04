let a = 1;
var b = 2;

this.c = 3;

abc = 123; // Evite tocar o escopo global
console.log(globalThis.abc);

console.log(globalThis.a, globalThis.b);
console.log(this.a, globalThis.b);
console.log(module.exports);
console.log(this === module.exports);
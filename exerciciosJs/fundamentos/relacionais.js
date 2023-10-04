//JS leva em consideração na hora de fazer a operação relacional não só valor o valor da variavel
//mas tbm o seu tipo.
console.log('(1)', '1' == 1);
console.log('(2)', '1' === 1); //Estritamente igual, valor e tipo
console.log('(3)', '3' != 3);
console.log('(4)', '3' !== 3);

console.log('(5)', 2 > 1);
console.log('(6)', 2 < 1);
console.log('(7)', 2 >= 1);
console.log('(8)', 2 <= 1);

console.log('(9)', null == undefined);
console.log('(10)', null === undefined);
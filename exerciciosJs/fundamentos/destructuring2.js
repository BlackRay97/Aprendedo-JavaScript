const [a] = [10];
console.log(a);

const [n1, ,n2, ,n3, n4 = 0] = [10, 5, 8, 9];
console.log(n1, n2, n3, n4);

const [, [, nota]] = [[1, 2, 3,], [4, 5, 6]];
console.log(nota);
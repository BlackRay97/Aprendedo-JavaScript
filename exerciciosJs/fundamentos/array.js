console.log(typeof Array); //é uma função

const valores = [2, 4, 6, 8];

console.log(valores);

//Tentar acessar um indice que não existe no array
console.log(valores[4]);
//Não da erro e retorna underfined;

//Pode receber multiplos valores
valores.push({id: 1}, false, ['Franscisco'], null);
console.log(valores);

console.log(valores.length);

delete valores[0]; //Deleta o valor porem deixa um espaço vazio

console.log(valores.length);

valores.pop();
console.log(valores.length);
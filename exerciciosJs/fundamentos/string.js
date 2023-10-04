const escola = "Cod3r";

console.log(escola.charAt()); //Por padrão senão o indice é o 0, senão informado nenhum;
console.log(escola.charCodeAt(2));
console.log(escola.indexOf('t')); // Por padrao retorna -1 caso o valor passado não tenha.
console.log(escola.indexOf('C'));

console.log(escola.substring(1));
console.log(escola.substring(1, 4));

console.log('Escola '.concat(escola).concat('!'));
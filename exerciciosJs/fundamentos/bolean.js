let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//Valores Verdadeiros
isAtivo = 1;
console.log(!!isAtivo);

console.log('Valores verdadeiros...');
console.log(!!3);
console.log(!!-1); //Qualquer valor numerico
console.log(!!' '); //Se tiver pelo menos um espaço em branco já resolve para true
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = 33)); //O valor da atribuição

console.log('Valores falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = 0));
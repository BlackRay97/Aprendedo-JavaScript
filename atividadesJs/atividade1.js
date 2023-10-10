function calculadora(a = 0, b = 0, operacao = '+') {
    let result = 0;
    switch(operacao) {
        case '+': 
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            console.log("Operação não definida");
    }
    return result;
}

console.log(calculadora(2, 5, '!'));
console.log(calculadora(2, 5, '+'));
console.log(calculadora(2, 5, '-'));
console.log(calculadora(2, 5, '*'));
console.log(calculadora(2, 5, '/'));

function calculadoraBasica(valor1 = 1, operacao = '+', valor2 = 1) {
    let result;
    switch(operacao) {
        case "+":
            result = valor1 + valor2;
            break;
        case "-":
            result = valor1 - valor2;
            break;
        case "*":
            result = valor1 * valor2;
            break;
        case "/":
            result = valor1 / valor2;
            break;
        default:
            result = "Operação inválida";
    }
    return result;
}

console.log(calculadoraBasica(1, "+", 12));
console.log(calculadoraBasica(1, "-", 12));
console.log(calculadoraBasica(1, "*", 12));
console.log(calculadoraBasica(1, "+", 12));
console.log(calculadoraBasica(1, "%", 12));

const divisao = function(divisor, dividendo) {
    return {
        resultDivisao: dividendo / divisor,
        restoDivisao: dividendo % divisor
    }
}

console.log(divisao(2, 2));
console.log(divisao(4, 20));
console.log(divisao(2, 9));
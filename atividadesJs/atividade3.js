function potencia(base, expoente) {
    let result = 1;
    for(let i = 1; i <= expoente; i++) {
        result *= base;
    }
    return result;
}

console.log(potencia(2, 5));
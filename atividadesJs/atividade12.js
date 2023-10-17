const fatorial = numero => {

    let fatorialDeNumero = numero;

    for(let i = 1; i < numero; i++) {
        fatorialDeNumero *= i
    }

    return fatorialDeNumero;
}

console.log(fatorial(5));
console.log(fatorial(6));
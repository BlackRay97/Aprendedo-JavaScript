const exibirNumeros = function([min, max]) {
    if(min > max) {
        [min, max] = [max, min];
    }
    while(min <= max) {
        console.log(min);
        min++;
    }
}

exibirNumeros([1, 50]);
exibirNumeros([50, 1]);
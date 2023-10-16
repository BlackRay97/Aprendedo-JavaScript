function anoBissexto(ano) {
    let bissexto;

    if(ano % 400 == 0) {
        bissexto = true;
    }else if(ano % 100 == 0) {
        bissexto = true;
    }else if(ano % 4 == 0) {
        bissexto = true;
    }else {
        bissexto = false;
    }

    return bissexto;
}

console.log(anoBissexto(1995));
console.log(anoBissexto(1996));
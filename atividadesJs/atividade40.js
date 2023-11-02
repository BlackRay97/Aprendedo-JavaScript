function conceitoDeNotas(notas = []) {
    notas.forEach(e => {
        if(e >= 0.0 && e <= 4.9) {
            console.log(`${e} D`);
        }else if(e >= 5 && e <= 6.9) {
            console.log(`${e} C`);
        }else if(e >= 7 && e <= 8.9) {
            console.log(`${e} B`);
        }else if(e >= 9 && e <= 10) {
            console.log(`${e} A`);
        }
    })
}

conceitoDeNotas([4.6, 3.2, 6.7, 9.0, 5.8]);
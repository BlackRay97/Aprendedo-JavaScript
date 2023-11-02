function progressaoAritimetica(Ntermo, a1, r) {
    const PA = [];
    let atual;
    let soma = 0;
    for(let i=1; i<Ntermo; i++) {
        atual = atual ? atual : a1;
        PA.push(atual);
        atual = atual + r;
    }

    PA.forEach(e => soma += e);

    console.log(PA);
    console.log(soma);
}

function progressaoGeometrica(Ntermo, a1, g) {
    const PG = [];
    let atual;
    let soma = 0;
    for(let i=1; i<Ntermo; i++) {
        atual = atual ? atual : a1;
        PG.push(atual);
        atual = atual * g;
    }

    PG.forEach(e => soma += e);

    console.log(PG);
    console.log(soma);
}

progressaoAritimetica(10, -10, 3);
progressaoGeometrica(5, 2, 6);
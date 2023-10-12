//Formula X² + bx + c = 0
//Delta b² - 4 * a * c
//-b +- raiz de delta / 2 . a



function bhaskara(ax2, bx, c) {
    let delta = Math.pow(bx, 2) - 4 * ax2 * c;
    const vetor = [];

    if(delta < 0) {
        vetor[0] = 'Delta negativo'
    }else{
        vetor[0] = (-(bx) + Math.sqrt(delta)) / (2 * ax2);
        vetor[1] = (-(bx) - Math.sqrt(delta)) / (2 * ax2);
    }
    return vetor;
}

console.log(bhaskara(3, -5, 12));
console.log(bhaskara(3, -5, -12));

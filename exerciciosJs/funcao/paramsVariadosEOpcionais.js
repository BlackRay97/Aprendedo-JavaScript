function calculaArea(altura, largura) {
    const area = altura * largura;
    if(area > 20) {
        console.log("Area maior que o permitido!") //Sintaxe é valido mas não é bom usar
    }else {
        return area;
    }
}

console.log(calculaArea(5, 3));
console.log(calculaArea(2, 6, 6, 10)); //Pode passar quantos params queser
console.log(calculaArea(5)) //Omitir alguns params
console.log(calculaArea()) //Até passar nenhum
calculaArea(5, 5);
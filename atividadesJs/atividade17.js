function planoDeTrabalho(plano, salario) {
    
    
    switch(plano.toUpperCase()) {
        case "A":
            salario += salario * 0.1;
            break;
        case "B":
            salario += salario * 0.2;
            break;
        case "C":
            salario += salario * 0.3
            break;
        default:
            console.log("Plano inválido");
    }

    return salario;
}

console.log(planoDeTrabalho("a", 1500));
console.log(planoDeTrabalho("B", 1500));
console.log(planoDeTrabalho("a", 1500));
console.log(planoDeTrabalho("d", 1500));
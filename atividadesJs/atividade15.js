const concersionaria = function(tipoDeCarro) {
    switch(tipoDeCarro) {
        case "hatch" :
            console.log("Compra efetuada com sucesso");
            break;
        case "sedan" :
            console.log("Tem certeza que não prefere esse modelo ?");
            break;
        case "caminhonete" :
            console.log("Tem certeza que não prefere esse modelo ?");
            break;
        case "motocicleta" :
            console.log("Tem certeza que não prefere esse modelo ?");
            break;
        default: 
            console.log("Não trabalhamos com esse modelo.");
    }
}

concersionaria("hatch");
concersionaria("motocicleta");
concersionaria("sedan");
concersionaria("caminhonete");
concersionaria("gol");
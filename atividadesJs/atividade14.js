function feira(fruta) {
    switch(fruta) {
        case "maçã" :
            console.log("Não vendemos essa fruta aqui.");
            break;
        case "kiwi" :
            console.log("Estamos em escassez de kiwis.");
            break;
        case "melancia" :
            console.log("Aqui está, são 3,00 R$ o quilo.");
            break;
        default :
            console.log("Erro...");
    }
}

feira("maçã");
feira("kiwi");
feira("melancia");
feira("banana");
function sistemaDeNotas(nota) {
    if(nota >= 0 && nota <= 100) {

        if(nota < 38) {
            console.log("Reprovado!")
        }else if(nota % 5 == 0) {
            console.log(nota);
        }else {
            
            switch(nota % 5) {
                case 3:
                    nota += 2;
                    break;
                case 4:
                    nota += 1;
                    break;
            }
            console.log(nota);
        }
    }else {
        console.log("Nota inválida.")
    }
}

sistemaDeNotas(53);
sistemaDeNotas(52);
sistemaDeNotas(64);
sistemaDeNotas(37);
sistemaDeNotas(38);
sistemaDeNotas(75);
sistemaDeNotas(-1);
sistemaDeNotas(101);
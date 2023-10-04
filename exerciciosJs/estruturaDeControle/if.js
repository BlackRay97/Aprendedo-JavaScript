function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log("Aprovado! " + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6);

function seForVerdadeFalo(valor) {
    if(valor) {
        console.log(`Eh verdade kkkk ${valor}`);
    }
}
//Js converte o tipo para true or false, independente do valor
seForVerdadeFalo(1);
seForVerdadeFalo(true);
seForVerdadeFalo({});
seForVerdadeFalo([]);
seForVerdadeFalo(null);
seForVerdadeFalo(undefined);
seForVerdadeFalo();

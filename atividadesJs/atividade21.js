function verificaIdade(idade) {
    let idadeAtual;
    if(idade < 10) {
        idadeAtual = 80;
    }else if(idade >= 10 && idade <= 30) {
        idadeAtual = 50;
    }else if(idade > 30 && idade <= 60) {
        idadeAtual = 95;
    }else if(idade > 60) {
        idadeAtual = 130;
    }

    return idadeAtual;
}

function planoDeSaude(idade) {
    const custoPadrao = 100;
    console.log(`Seu plano de saúde custa: ${custoPadrao + verificaIdade(idade)}`);
}

planoDeSaude(28);
planoDeSaude(61);
planoDeSaude(2);

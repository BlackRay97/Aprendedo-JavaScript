function taxaDeCrescimento(nome, altura, crescimentoAnual) {
    return {altura, crescimentoAnual, nome};
}

function comparandoAltura(crianca1, crianca2) {
    if(crianca1.altura != crianca2.altura) {
        let anos = 0;
        let menorCrianca = crianca1.altura < crianca2.altura ? crianca1 : crianca2;
        let maiorCrianca = crianca1.altura > crianca2.altura ? crianca1 : crianca2;

        while(menorCrianca.altura < maiorCrianca.altura) {
            menorCrianca.altura += menorCrianca.crescimentoAnual;
            maiorCrianca.altura += maiorCrianca.crescimentoAnual;
            anos++;
        }

        console.log(
            `Serão ${anos} anos para o(a) ${menorCrianca.nome} ultra passar a altura do(a) ${maiorCrianca.nome}.`);
    }

}

const joao = taxaDeCrescimento("João", 100, 13);
const pedro = taxaDeCrescimento("Pedro", 163, 3);
comparandoAltura(pedro, joao);
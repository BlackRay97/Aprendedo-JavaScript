const pessoa = {
    nome: "Ana",
    falar() {
        console.log("Fala!" + this.nome);
    }
}
//O this pode variar
pessoa.falar();

//Passando o método falar de pessoa
const falar = pessoa.falar;
falar(); //This está apontando para outro lugar, não mais para o obj pessoa

const falar2 = pessoa.falar.bind(pessoa); //Dessa forma estou amarrando o this com o obj pessoa
falar2();
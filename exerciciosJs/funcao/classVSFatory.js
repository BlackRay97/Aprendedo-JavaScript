class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    fala() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('João');
p1.fala();

//Função factory
const criarPessoa = nome => {
    return {
        falar() {console.log(`Meu nome é ${nome}`)}
    }
}

const p2 = criarPessoa('Fernanda');
p2.falar();
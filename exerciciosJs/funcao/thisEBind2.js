//Outra forma de Amarrar o this
function Pessoa() {
    this.idade = 0;

    const self = this; //Nesse contexto o this está apontando para pessoa
    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }, 1000);
}

//Instanciando a função pessoa
new Pessoa;
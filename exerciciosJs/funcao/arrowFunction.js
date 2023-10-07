//Funções Arrow
function temporizador() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000)
}

/*A função arrow amarra o this dependendo do contexto que foi criado */

new temporizador();
function Carro(velocidadeMax, delta) {
    //Atributo privado
    let velocidadeAtual = 0;

    //método público
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta;
        }else {
            velocidadeAtual = velocidadeMax;
        }
    }

    this.getVelocidadeAtual = () => console.log(velocidadeAtual);
}

const unoMille = new Carro(200, 5);
unoMille.acelerar();
unoMille.getVelocidadeAtual();
unoMille.acelerar(20);
unoMille.getVelocidadeAtual();
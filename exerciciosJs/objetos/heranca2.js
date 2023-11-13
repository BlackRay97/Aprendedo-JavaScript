//Cadeia de prototipo
Object.prototype.attr0 = 'Y';
const avo = { attr: 'A'};
const pai = { __proto__: avo, attr2: 'B'};
const filho = { __proto__: pai, attr3: 'C'};

console.log(filho.attr);
console.log(filho.attr0);
console.log(filho.attr2);
console.log(pai.attr);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual = delta;
        }else {
            this.velAtual = this.velMax;
        }
    },

    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'F4',
    velMax: 340 //Sonbreamento
}

const volvo = {
    modelo: 'V4',
    status() {
        return  `${this.modelo} ${super.status()}`;
        //super => chamando o status do prototype
    }
}

//Definir a relação de prototipo
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

ferrari.acelerarMais(100);
console.log(ferrari.status());

volvo.acelerarMais(300);
console.log(volvo.status());
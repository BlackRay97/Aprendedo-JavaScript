function rand({ max = 1000, min = 0}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { max: 45, min: 20};

console.log(rand(obj));
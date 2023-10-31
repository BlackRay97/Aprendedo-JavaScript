const vetorDenumeros = [1,2,3,4,5,6,7,8,9,10];
let par = 0;
let impar = 0;

vetorDenumeros.forEach((e) => {
    
    if(e % 2 == 0) {
        par++;
    }else {
        impar++;
    }
});

console.log(`Numeros que são pares: ${par}`);
console.log(`Numeros que são impares: ${impar}`);
function tiposDeTriangulo(lado1, lado2, lado3) {
    if(lado1 === lado2 && lado1 === lado3) {
        console.log("Equilátero");
    }else if(lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
        console.log("Escaleno");
    }else if(lado1 !== lado2 || lado1 !== lado3 || lado2 === lado3) {
        console.log("Isóseles");
    }
}

tiposDeTriangulo(1, 1, 1);
tiposDeTriangulo(1,2,2);
tiposDeTriangulo(1,1,2);
tiposDeTriangulo(1,2,1);
tiposDeTriangulo(1,2,3);
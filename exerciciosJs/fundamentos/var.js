{
    {
        {
            {
                var sera = 'Sera!?';
            }
        }
    }
}
console.log(sera);
//Não tem escobo de bloco

function escopoFunction() {
    var seraFunction = 'Escopo de funcao';
    console.log(seraFunction);
}

//console.log(seraFunction); Tem escopo de função
escopoFunction();

//Toda variavel declarada com VAR terá apenas dois escopo, 1 de função, 2 global
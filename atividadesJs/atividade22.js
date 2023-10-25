function associacao(mes, valor) {
    switch(mes) {
        case 1: 
        valor += valor * 0.05;
        case 2: 
        valor += valor * 0.05;
        case 3: 
        valor += valor * 0.05;
        case 4: 
        valor += valor * 0.05;
        case 5: 
        valor += valor * 0.05;
        case 6: 
        valor += valor * 0.05;
        case 7: 
        valor += valor * 0.05;
        case 8: 
        valor += valor * 0.05;
        case 9: 
        valor += valor * 0.05;
        case 10: 
        valor += valor * 0.05;
        case 11: 
        valor += valor * 0.05;
        case 12: 
        valor += valor * 0.05;
    }

    console.log(`Valor de retorno: ${(valor).toFixed(2)} R$`);
}

associacao(5, 500);
associacao(10, 500);
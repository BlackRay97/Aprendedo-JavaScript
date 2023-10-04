function tratarErrorELancar(e) {
    //throw e;
    //throw 10;
    //throw 'mensagem';
    throw {
        nome: e.name,
        msg: e.message,
        data: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase().concat('!!!'));
    } catch (error) {
        tratarErrorELancar(error);
    }
    finally {
        //Sempre vai ser chamado, se ocorrer o error ou não
        console.log('Final')
    }
    
}

imprimirNomeGritado({name: 'Robeto'});
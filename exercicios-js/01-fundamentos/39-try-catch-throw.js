function tratarErroELancar(erro) {
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErroELancar(e)
    } finally { // Este bloco é chamado ocorrendo ou não erro
        console.log('final');
    }

}

const obj = { nome: 'Roberto' }
imprimirNome(obj)
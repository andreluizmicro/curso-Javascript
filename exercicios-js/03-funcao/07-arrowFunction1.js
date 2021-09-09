// Exemplo de função sem Arrow function
let dobro = function (a) {
    return 2 * a
}

// Função Arrow sempre será uma função anônima
dobro = (a) => {
    return 2 * a
}

// quando não tem as chaves o retorno deve ser implícito, geralmente este tipo de escrita é usado apenas em função de uma linha no corpo da função
dobro = a => 2 * a
console.log(dobro(Math.PI))

// --------------------------------------------------------------------------------

// Função normal
let ola = function () {
    return 'Olá'
}

// Refatorando a função
ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro
console.log(ola())
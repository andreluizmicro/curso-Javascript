// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6)
imprimirSoma()

// Função com retorno
// Por padrão vem b = 0 caso não venha por parametro
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(3))
console.log(soma())

function teste(dataNasimento) {
    try {
        dataNasimento - idade
    } catch (error) {
        console.log("Você não definiu a idade!")
    }

}

teste()
function soma() {
    let soma = 0
    for (i in arguments) { // Pega o índice de cada elemento no array arguments
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma("a", "b", "c"))
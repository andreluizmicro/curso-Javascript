function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // invertendo array com destructuring
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor) // arredonda para baixo
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10])) // Passando apenas o valor máximo, o valor mínimo será assumido como zero
console.log(rand([])) // Vai assumir os valores padrões assumo 0 e 1000
console.log(rand()) // Erro, não é possível ler valores undefined
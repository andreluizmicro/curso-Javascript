const nums = [1, 2, 3, 4, 5]

// Map é um For com Propósito
let resultado = nums.map(function (elemento) {
    return elemento * 2
})

console.log(resultado, nums)

/**
 * ! OBS: O map não retorna o array atual ele gera um novo array
 */

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
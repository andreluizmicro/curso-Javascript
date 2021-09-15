/**
 * ! Um array em JavaScript é um objeto, de estrutura dinâmica, cresce dinamicamente e diminui, também é uma estrutura indexada
 * ! assim ele é organizado pro indices.
 * */
/**
 * ! PONTO IMPORTANTE SOBRE ARRAY
 * * Devemos trabalhar com dados homogêneos em um array, ou com o mesmo tipo de dado, evitar ficar colocando array com inteiros, booleanos,float, etc.
 */

console.log(typeof Array, typeof new Array, typeof [])

// Essa é uma forma não tão recomendada de se criar array o mais recomendado é a forma literal
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// Utilizando a forma literal a mais indicada

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // retorna undefined

aprovados[3] = 'Paulo'
aprovados.push('André')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados[8] === undefined)

console.log("============================================================================");

console.log(aprovados)

console.log("============================================================================");
// Reordena o array, causando alteração no próprio array original
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
console.log(aprovados[2])

/**
 * ! A função splice tem algumas funções
 * * 1 - Adicionar elementos em um determinado índice 
 * * 2 - Serve para remover determinados elementos de um array 
 * * 3 - Também serve para adiocionar e remover elementos ao mesmo tempo
 */
aprovados = ['Bia', 'Carlos', 'Ana']
//aprovados.splice(1, 1) // Remove o indice carlos
aprovados.splice(1, 2, 'Elementos1', 'Elementos2') // Remove o elemento de indice 1 até o 2 e adiciona os novos
aprovados.splice(1, 0, 'Elementos1', 'Elementos2') // No indice 1 do array adiciona o elemtno1 e elemento2
console.log(aprovados)


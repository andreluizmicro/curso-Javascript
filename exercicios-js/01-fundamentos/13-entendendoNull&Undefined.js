const a = { name: 'Teste' }
console.log(a)

// Atribuição por referência
const b = a // B aponta para o mesmo endereço de memória de A
console.log(b)

b.name = 50
console.log(a)

let c = 3
let d = c // Cópia por valor ou seja c tem seu valor e d tem seu valor
d++

console.log(d)
console.log(c)
console.log("---------------------------------------------------------")
console.log("------------- EXEMPLOS NULL E UNDEFINED------------------")
console.log("---------------------------------------------------------")

let valor // não incializada
console.log(valor)
//console.log(valor2) // Gera um erro -> valor2 is not defined

valor = null // ausência de valor
console.log(valor)

// #### OBS SEMPRE USE NULL PARA ZERAR O VALOR DE UMA VARIÁVEL E NUNCA UNDEFINED
// --------------------------------------------------------------------------------

//console.log(valor.toString()) // Erro: Cannot read property 'toString' of null ->  Não é possível ler a porpriedade toString de NULL

const produto = {}
console.log(produto.preco) // Retorna undefined
console.log(produto) // {} -> objeto vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)
//delete produto.preco
console.log(produto)

produto.preco = null // Semp preço
console.log(!!produto.preco)
console.log(produto)
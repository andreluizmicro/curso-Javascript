const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Object.keys -> pega todas as chaves de um objeto
console.log(Object.keys(pessoa))

// Pega todos os valores de um objeto
console.log(Object.values(pessoa))

// Pega a lista das chaves e valores de um objeto como um array
console.log(Object.entries(pessoa))

console.log("==============================================");

// Percorre os elementos do array gerado pelo Object.entry(pessoa)
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

console.log("==============================================");
// Outras formas: Com o operador destructuring
// Forma mais clara
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

console.log("==============================================")

// Definir uma propriedade de um objeto, serve para definir caracteristicas de uma propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, // Propriedade não pode ser modificada
    value: '01/01/2019'
})


pessoa.dataNascimento = "01/01/2017"
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa))

console.log("==============================================")

// Object.assing (ECMAScript 2015)
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(destino, o1, o2)
console.log(obj)

console.log("==============================================")
Object.freeze(obj)
obj.c = 1234
console.log(obj)
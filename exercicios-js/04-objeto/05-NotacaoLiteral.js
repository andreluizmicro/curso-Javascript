// Com a adição do EC2015 temos essas melhorias

const a = 1
const b = 2
const c = 3

// Forma antiga
const obj1 = { a: a, b: b, c: c }

// Forma atualizada
const obj2 = { a, b, c }

console.log(obj2, obj2)

// Outra melhoria é criar dinamicamente uma string
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = { [nomeAttr]: valorAttr }
console.log(obj4)


const obj5 = {
    // Forma antiga
    funcao1: function () {
        // ...
    },

    //Forma nova -> forma reduzida de definir uma função dentro de um objeto com a nova versão do JavaScript
    funcao2() {
        // ...
    }
}

console.log(obj5)


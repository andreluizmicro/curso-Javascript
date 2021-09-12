// Object.preventExtensions -> Previni que o objeto extenda, ou seja que o objeto aumente, tenha novos atributos mais pode ser modificado e deletado

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


const pessoa = {
    nome: 'Juliana',
    idade: 35
}

/**
 *  Object.seal -> Serve para selar o objeto, com isso você não consegue adicionar novos atributos, excluir,
 *  mais consegue modificar os atributos que já existem
 * */
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

// Não consegue adicionar novo atributo e nem remover como nas duas linhas abaixo
pessoa.sobrenome = 'Silva'
delete pessoa.nome

// Consegue alterar
pessoa.idade = 29

// Object.freeze = selado + valores constantes
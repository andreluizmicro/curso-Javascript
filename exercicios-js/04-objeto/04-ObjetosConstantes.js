// pessoa aponta para um endereço de memória neste caso o endereço é 123
// pessoa -> 123 -> {...}
const pessoa = {
    nome: 'Joao'
}

// Neste caso, alteramos o valor do endereço de memória
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// Neste caso temos um erro
// pessoa = { nome: 'Ana' }

/* 
! Congelando o objeto -> Ao congelar o objeto não é possível mais alterar o valor do mesmo. Portanto qualquer tentativa de alteração
! não terá nenhum efeito sobre o objeto.
*/
Object.freeze(pessoa)
delete pessoa.nome
pessoa.nome = 'Maria'
console.log(pessoa.nome)
console.log(pessoa)

// Criando objeto que não pode ser alterado
const pessoaConstante = Object.freeze({ nome: 'Joao' })
console.log(pessoaConstante)
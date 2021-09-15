const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)


// Declarativo -> é uma abordagem mais interessante, pois permite o reuso do código para outras funcionalidades
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

//alunos mapee para nota e reduza somando tudo
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// SQL Linguagem declarativa, assim como o HTML, já o JavaScript podemos escolher o tipo de abordagem
// select codigo, nome, email from clientes where ativo = 1
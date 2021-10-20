// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj)); // retorna as chaves de um objeto neste caso a,b,c
console.log(Object.values(obj)); // retorna os valores de um objeto neste caso 1,2,3
console.log(Object.entries(obj));// Retorna uma matriz neste caso um array de arrays [ ['a',1], ['b',2], ['c',3] ]

// Melhorias na Notação Literal
const nome = 'Carla'

const pessoa = { // Neste caso ele já cria um objeto pessoa com a chave nome com o valor Carla
    nome,
    ola() { // podemos criar funções apenas com o nome
        return 'Oi gente!'
    }
}

console.log(pessoa.nome);
console.log(pessoa.ola());

// Classe
class Animal { }
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())
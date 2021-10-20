// let e const
{
    var a = 2
    let b = 3
    // console.log(b); // Dessa modo conseguimos acessar o valor de b
}

console.log(a);
//console.log(b); // Causa erro pois b foi declarado dentro do escopo de um bloco, logo causa um erro de undefined

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`);

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras);

const [x, , y] = [1, 2, 3]
console.log(x, y);

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome);
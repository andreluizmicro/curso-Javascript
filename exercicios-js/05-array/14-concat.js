const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']

const todos = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos)

// Gera um novo array e não altera o original 
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
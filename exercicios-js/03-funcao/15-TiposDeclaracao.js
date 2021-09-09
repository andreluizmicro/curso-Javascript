console.log(soma(3, 4))

// Causa erro
console.log(sub(3, 4)) // Não definida só pode ser chamada após a declaração da funções pois foi criada como function expression

// function declaration
/**
 * Quando uma função é declarada dessa forma o interpretador do javascript primeiro carrega as funções(lê todas as funções) 
 * e executa o código, por isso conseguimos executar a função na linha 1 
 * 
 **/

function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression **** POUCA USADA
const mult = function mult(x, y) {
    return x * y
}

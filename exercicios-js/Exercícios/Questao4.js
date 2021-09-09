/**
 * Questão 4
 * Retorna o número (contagem) de vogais na string fornecida.
 * Consideraremos a, e, i, o, u como vogais para.
 * A string de entrada consistirá apenas em letras minúsculas e/ou espaços.
 */

const vogais = ["a", "e", "i", "o", "u"]

function contarVogais(texto) {
    let resultado = 0
    const novoTexto = texto.toLowerCase()

    for (let i = 0; i <= novoTexto.length; i++) {
        if (vogais.includes(novoTexto[i])) {
            resultado++
        }
    }
    console.log(resultado);
}

contarVogais('Era uma casa muito engraçada') // Resultado 13
contarVogais('Olá mundo') // Resultado 3
contarVogais('Tiago') // Resultado 3
/** Questão 1
 *  O código abaixo não está funcionando corretamente, tente descobrir o porquê:
*/

function multiplicar(a, b) {
    A * b
}

/**
 * Reposta: A variável A não foi definida, já que na função foi passado como paramêtro a minusculo
 * outro detalhe é que a função não retorna um resultado ou imprime um valor na tela
 */

// Correção:

function multiplicar(a, b) {
    console.log(a * b)
}

multiplicar(1, 1)
multiplicar(1, 2)
multiplicar(3, 2)
multiplicar(3, 5)
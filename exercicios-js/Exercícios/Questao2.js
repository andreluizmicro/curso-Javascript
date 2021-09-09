/**
 * Questão 2
 * Dado um array de inteiros, encontre aquele que aparece um número ímpar devezes.
 * Sempre haverá apenas um número inteiro que aparece um número ímpar de vezes.
 */

function contarImpar(array) {
    const contador = Object.create(null);

    for (const key of array) {
        contador[key] = (contador[key] || 0) + 1
    }

    const aux = Object.entries(contador).map(([value, count]) => ({
        numero: value,
        quantidade: count
    }))

    for (let i in aux) {
        if (aux[i].quantidade % 2 === 1) {
            console.log("Resultado " + aux[i].numero)
        }
    }
}

contarImpar([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // Resultado 5
contarImpar([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]); // Resultado -1
contarImpar([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]); // Resultado 5
contarImpar([10]); // Resultado 10
contarImpar([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]); // Resultado 10
contarImpar([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]); // Resultado 1
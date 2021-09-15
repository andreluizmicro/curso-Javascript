const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']

// Remove o último elemento do array
pilotos.pop()
console.log(pilotos)

console.log("------------------------------------------------");

// Adiciona um novo elemento no array no ultimo indice
pilotos.push('Verstappen')
console.log(pilotos)

console.log("------------------------------------------------");

// Remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

console.log("------------------------------------------------");

// Adiciona um elemento na primeira posição de indice 0 no array
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adiocnar e remover elemento do array
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover elementos com o método splice
pilotos.splice(3, 1)
console.log(pilotos)

/**
 * ! slice -> pega um pedaço(parte do array)
 */

const algunsPilotos1 = pilotos.slice(2) // Gera um novo arrau a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Pega os valores começando do indice 1 e ignora o 4
console.log(algunsPilotos2)
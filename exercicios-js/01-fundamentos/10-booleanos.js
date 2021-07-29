let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!!true)
console.log(!!false)

console.log(`----- EXEMPLOS VERDADEIROS --------`)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log(`----- EXEMPLOS FALSOS --------`)
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(`----- PARA FINALIZAR --------`)
console.log(!!('' || null || 0 || ' ')) // Retorna true pois o último elemento ' ' é verdadeiro 
console.log(('' || null || 0 || 'epa' || 123)) // Pega o primeiro valor verdadeiro no caso o 'epa'

let nome = ''
console.log(nome || 'Desconhecido') // Retorna Desconhecido pois nome é falso, caso o nome for true(let nome = 'André') retorna nome
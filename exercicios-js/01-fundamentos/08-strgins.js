const escola = 'Cod3r'

console.log(escola.charAt(4)) // Pegar determinado caracter dentro de uma string
console.log(escola.charAt(4).toUpperCase()) // Pega um caracter e transformar em maiúsculo
console.log(escola.charAt(5)) // Pegando caracter que não existe
console.log(escola.charCodeAt(3)) // Pega o código do caracter
console.log(escola.indexOf('3')) // Paga a partir de um caracter o índice dele

console.log(escola.substring(1)) // Usando substring passando o indice inicial
console.log(escola.substring(0, 3)) // Usando substring passando o indice inicial e indece final

console.log('Escola ' + escola.concat("!")) // Formar de concatenação
console.log(escola.replace(3, 'e')) // Replace ou alterar 3 por e
console.log(escola.replace(/\d/, 'e')) // Replave com Regex
console.log(escola.replace(/\w/g, 'e')) // Replace com Regex

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/./))
// ForOf itera sobre valores e não sobre indice

for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse']

// for in pega o indice
for (let i in assuntosEcma) {
    console.log(i)
}

// for of pega os valores
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

// Percorrer e Imprime chave e valor
for (let assunto of assuntosMap) {
    console.log(assunto)
}

// Percorrer e Imprime as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

// Percorrer e Imprime os valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

// Percorrer e imprimir as entradas
for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])

for (let letra of s) {
    console.log(letra)
}
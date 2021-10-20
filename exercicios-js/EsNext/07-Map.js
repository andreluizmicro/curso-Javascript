const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // Forma errada de acesar, retorna undefined
console.log(tecnologias.get('react').framework)

const chaveVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chaveVariadas.forEach((valor, chave) => {
    console.log(chave, valor);
})

// Função has verifica se um elemento está ou não dentro do map
console.log(chaveVariadas.has(123))
chaveVariadas.delete(123)
console.log(chaveVariadas.has(123))
console.log(chaveVariadas.size)

chaveVariadas.set(123, 'a')
chaveVariadas.set(123, 'b')

// Retorna b pois não podemos ter elementos duplicados
console.log(chaveVariadas);

console.log("====================================================================");

// OBSERVAÇÃO -> Do lado das chaves não podemos ter valores repetidos, logo temos na chave 123 o valor de b mas os valores sim podemos
// Ter repetidos
chaveVariadas.set(123, 'a')
chaveVariadas.set(456, 'b')

console.log(chaveVariadas);
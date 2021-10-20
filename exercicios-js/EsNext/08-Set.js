// Não aceita repetição;não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

// Não aceita colocar Vasco duas vezes no caso linha 3 e 6. Ignora o Vasco da linha 6
console.log(times);
console.log(times.size);
console.log(times.has('vasco')) // Neste caso a verificação retorna false, pois vasco está escrito com letra Maiúscula
console.log(times.has('Vasco'))

times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes) // Neste caso remove um valor Lucas, pois não aceita valores repetidos
console.log(nomesSet)
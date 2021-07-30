// Não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo')
  .add('Palmeiras')
  .add('Corinthians')
  .add('Flamengo')
  .add('Vasco')

console.log(times.size)
console.log(times.has('Vasco'))

const nomes = ['Raquel', 'Lucas', 'Marcos', 'Felipe', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)

// Rest e Spread
function total(...numeros) {
  let total = 0
  numeros.forEach(el => total += el)
  return total
}
console.log(total(1, 2, 3, 4, 5))

// Parametros Default
function log(texto = 'Node') {
  console.log(texto)
}
log()
log('Padrão')

// Arrow Function this
const lexico1 = () => console.log(this === module.exports)
lexico1()

// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 5)) 
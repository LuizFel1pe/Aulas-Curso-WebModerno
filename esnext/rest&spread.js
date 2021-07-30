// Rest (juntar) / Spread (espalhar)
// Usar rest como parametro de funções 

// Usar o spread com objeto/Array
const funcionario = { nome: 'Maria', salario: 1234.56 }
const clone = { ativo: true, ...funcionario }
console.log(funcionario, clone)

const grupoA = ['João', 'Maria', 'Gloria']
const grupoFinal = ['Marcos', ...grupoA, 'Luiz']
console.log(grupoA, grupoFinal)

// Rest parametro funcao 
function somar(...numeros) {
  let total = 0
  numeros.forEach(el => total += el)
  return total
}

console.log(somar(1,2,3,4,5))




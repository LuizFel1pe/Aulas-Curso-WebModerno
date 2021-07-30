// pop remove o ultimo.
const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()
console.log(pilotos)

// Adiciona na ultima
pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro
console.log(pilotos)

// Splice pode adicionar e remover elementos.
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1) 
console.log(pilotos)

const algunsPilotos = pilotos.slice(1, 4) // Retorna um array novo.
console.log(algunsPilotos)




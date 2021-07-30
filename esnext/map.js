const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })
tecnologias.set('vue', { framework: true })

console.log(tecnologias)

const chavesVariadas = new Map([
  [() => {  }, 'função'],
  [{}, 'Objeto'],
  [123, 'Números']
])

chavesVariadas.forEach((vl, ch) => console.log(vl, ch))
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

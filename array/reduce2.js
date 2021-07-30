const alunos = [
  { nome: 'João', nota: 7.3, bolsista: true },
  { nome: 'Maria', nota: 9.2, bolsista: false },
  { nome: 'Carla', nota: 9.8, bolsista: true },
  { nome: 'Pedro', nota: 8.7, bolsista: false }
]

// 1) Todos são bolsistas? 
const todosBolsistas = (resultado, bolsista) => {
  console.log(resultado, bolsista)
  return resultado && bolsista 
}
console.log(alunos.map(({ bolsista }) => bolsista).reduce(todosBolsistas))

// 2) Algum é bolsista?
const algumBolsista = (resultado, bolsista) => {
  console.log(resultado, bolsista)
  return resultado || bolsista 
}

console.log(alunos.map(({ bolsista }) => bolsista).reduce(algumBolsista))
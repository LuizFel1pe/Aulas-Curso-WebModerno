const alunos = [
  { nome: 'João', nota: 7.3, bolsista: true },
  { nome: 'Maria', nota: 9.2, bolsista: false },
  { nome: 'Carla', nota: 9.8, bolsista: true },
  { nome: 'Pedro', nota: 8.7, bolsista: false }
]

const mediaNotas = alunos.map((a) => a.nota)
  .reduce((acc, item, i, arr) => {
    console.log('Index:', i, 'Array:', arr)
    console.log('ACC:', acc, '|| Atual:', item)
   return acc + item / arr.length
  }, 0)

console.log("Resultado final:", mediaNotas)
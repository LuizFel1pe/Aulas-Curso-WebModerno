Array.prototype.FlatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const escola = [
  {
    nome: 'Turma M1',
    alunos: [{
      nome: 'Gustavo',
      nota: 8.1
    }, {
      nome: 'Ana',
      nota: 9.3
    }]
  },
  {
    nome: 'Turma M2',
    alunos: [{
      nome: 'Rebecca',
      nota: 8.9
    }, {
      nome: 'Roberto',
      nota: 7.3
    }]
  }
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = cadaObjeto => cadaObjeto.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)

console.log(notas1)
console.log(escola.flatMap(getNotasDaTurma))
console.log(escola.FlatMap(getNotasDaTurma))


// Array = nvl 1 dois objetos
// Dentro dos objetos duas propriededas, nome = string e alunos = Array
// Dentro de alunos um novo array com 2 objetos tbm,
// Dentro desse objeto duas propriedades nome e nota.
// [{nome: kjld, alunos: [{ nome: dkj, nota: 54}, {nome: kadf, nota: 584}]}, {nome: kjld, alunos: [{ nome: dkj, nota: 54}, {nome: kadf, nota: 584}]} ]
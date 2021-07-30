const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha = Object.create(pai)
filha.nome = 'Ana'
console.log(filha.corCabelo)

const filho = Object.create(pai, {
  nome: { value: 'Henrique', writable: false, enumerable: true }
})

console.log(filho)
console.log(`${filho.nome} tem cabelo ${filho.corCabelo}`)

for (let key in filho) {
  filho.hasOwnProperty(key) ? 
    console.log(key) : console.log(`Por herança ${key}.`)
} 
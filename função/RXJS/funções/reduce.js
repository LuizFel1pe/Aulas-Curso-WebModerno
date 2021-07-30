// const carrinho = [
//   {nome: 'Caneta', qtd: 10, preco: 7.99},
//   {nome: 'Impressora', qtd: 0, preco: 649.50},
//   {nome: 'Caderno', qtd: 4, preco: 27.10},
//   {nome: 'Lapis', qtd: 3, preco: 5.82},
//   {nome: 'Tesoura', qtd: 1, preco: 19.20}
// ]

// const getTotal = item => item.qtd * item.preco
// const somar = (acc, el) => acc + el

// const totalGeral = carrinho
//   .map(getTotal)
//   .reduce(somar)
// console.log(totalGeral)

// Criando um reduce
const carrinho = [
  {nome: 'Caneta', qtd: 10, preco: 7.99},
  {nome: 'Impressora', qtd: 0, preco: 649.50},
  {nome: 'Caderno', qtd: 4, preco: 27.10},
  {nome: 'Lapis', qtd: 3, preco: 5.82},
  {nome: 'Tesoura', qtd: 1, preco: 19.20}
]

Array.prototype.meuReduce = function(fn, inicial) {
  let acc = inicial
  
  for(let i = 0; i < this.length; i++) {
    if(!acc && i === 0) {
      acc = this[i]
      continue
    }

    acc = fn(acc, this[i], i, this) 
  }
  return acc
}

const getTotal = item => item.qtd * item.preco 
const total = carrinho.map(getTotal).reduce((acc, el) => acc + el)
console.log(total)
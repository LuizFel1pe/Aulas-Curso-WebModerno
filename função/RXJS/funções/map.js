// const carrinho = [
//   {nome: 'Caneta', qtd: 10, preco: 7.99},
//   {nome: 'Impressora', qtd: 0, preco: 649.50},
//   {nome: 'Caderno', qtd: 4, preco: 27.10},
//   {nome: 'Lapis', qtd: 3, preco: 5.82},
//   {nome: 'Tesoura', qtd: 1, preco: 19.20}
// ]

// const getName = el => el.nome
// const name = carrinho.map(getName)
// console.log(name)

// const getTotal = el => el.qtd * el.preco
// const result = carrinho.map(getTotal)
// console.log(result)


// Contruindo o proprio map
Array.prototype.meuMap = function(fn) {
  const novoArray = []
  for(let i = 0; i < this.length; i++) {
    const resultado = fn(this[i], i, this)
    novoArray.push(resultado)
  }
  return novoArray
}

const carrinho = [
  {nome: 'Caneta', qtd: 10, preco: 7.99},
  {nome: 'Impressora', qtd: 0, preco: 649.50},
  {nome: 'Caderno', qtd: 4, preco: 27.10},
  {nome: 'Lapis', qtd: 3, preco: 5.82},
  {nome: 'Tesoura', qtd: 1, preco: 19.20}
]

const getName = el => el.nome
const name = carrinho.meuMap(getName)
console.log(name)
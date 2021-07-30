Array.prototype.meuMap = function(callback) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this))
  }
  return newArr
}

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const soPreco = produto => produto.preco

const resultado = carrinho.meuMap(paraObjeto).meuMap(soPreco)
console.log(resultado)
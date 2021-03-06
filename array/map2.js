const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const soPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(soPreco)
console.log(resultado)

// const resultado = carrinho.map(item => JSON.parse(item))
// const final = resultado.map(({ preco }) => preco)

// console.log(final)
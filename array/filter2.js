Array.prototype.meuFilter = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

const produtos = [
  { nome: 'Notebook', preco: '2499', fragil: true },
  { nome: 'Ipad', preco: '4199', fragil: true },
  { nome: 'Copo de Vidro', preco: '12.49', fragil: true },
  { nome: 'Copo de Plastico', preco: '15.57', fragil: false }
]

const callbackFilter = ({ preco, fragil }) => preco > 500 && fragil === true
const filtrado = produtos.meuFilter(callbackFilter)

console.log(filtrado)
const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1249.68,
  desconto: 0.10
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), (err) => console.log(err || 'Arquivo Salvo!'))
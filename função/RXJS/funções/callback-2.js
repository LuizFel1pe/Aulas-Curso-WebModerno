const fs = require("fs")
const path = require("path")

const caminho = path.join(__dirname, 'texto.txt')

function exibirConteudo(err, conteudo) {
  console.log(conteudo.toString())
}

fs.readFile(caminho, exibirConteudo)
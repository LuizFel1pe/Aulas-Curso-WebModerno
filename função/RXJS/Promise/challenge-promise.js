const fs = require("fs")
const path = require("path")

const caminho = path.join(__dirname, 'texto.txt')

// const exibirConteudo = (_,conteudo) => {
//   return new Promise(resolve => {
//     resolve(conteudo)
//   })
// }

// fs.readFile(caminho, exibirConteudo)

// exibirConteudo().then(console.log)

function lerArquivo(caminho) {
  return new Promise(resolve => {
    fs.readFile(caminho, (_,conteudo) => {
      resolve(conteudo.toString())
    })
  })
}

lerArquivo(caminho).then(console.log)
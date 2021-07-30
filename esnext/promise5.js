function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if(Math.random() < chanceErro) {
        reject('Ocorreu um erro!')
      } else {
        resolve(valor)
      }
    } catch(e) {
        reject(e)  
    }
  })
}

funcionarOuNao("TESTE!!!", 0.5)
  .then(v => console.log(`Resolve: ${v}`))
  .then(v => consol.log(v), erro => console.log(erro))
  .catch(erro => console.log(`Erro: ${erro}`))
  .then(() => console.log("Fim"))

// Via de regra o catch é no fim
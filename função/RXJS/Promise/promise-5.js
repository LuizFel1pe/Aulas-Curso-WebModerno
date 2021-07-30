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
  .then(
    v => consol.log(v),
    err => console.log(`Erro esp.: ${err}`)
  )
  .catch(err => console.log(`Erro: ${err}`))
  .then(() => console.log("Fim"))

// Via de regra o catch é no fim
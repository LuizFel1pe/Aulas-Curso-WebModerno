function falar(phrase, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(phrase)
    }, time)
  })
}

falar('Olá, Seja Bem Vindo de Volta!', 2000)
  .then(console.log)
  .catch(err => console.log('Erro', err))
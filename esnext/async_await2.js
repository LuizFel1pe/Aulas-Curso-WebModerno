function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, mix] = [mix, max]
  return new Promise((resolve, reject) => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min
    if (numerosProibidos.includes(aleatorio)) {
      reject('Número Proibido')
    } else {
      resolve(aleatorio)
    }
  })
}

async function gerarMegaSena(qtdNumeros) {
  const numeros = []
  for (let _ of Array(qtdNumeros).fill()) {
    numeros.push(await gerarNumerosEntre(1, 100, numeros))
  }
  return numeros
}

gerarMegaSena(6)
  .then(console.log)
  .catch(console.log)
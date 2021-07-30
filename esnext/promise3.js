function gerarNumerosEntre(min, max) {
  if (min > max) [max, min] = [min, max]
  
  return new Promise(resolve => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min
    resolve(aleatorio)
  })
}

const numeroX10 = num => num * 10
const numeroFormat = numX10 => `O número gerado foi ${numX10}`

gerarNumerosEntre(10, 60)
  .then(numeroX10)
  .then(numeroFormat)
  .then(console.log)
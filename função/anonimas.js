const soma = function(x, y) {
  return x + y
}

const multi = function(x, y) {
  return x * y
}

const imprimirResultado = function(a, b, operacao = soma) {
  console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, multi)
imprimirResultado(3, 4, (x, y) => {
  if (x > y) {
    return x - y
  } else {
    return y - x 
  }
})
// Pré ES6 sem rest e spread
function soma() {
  let soma = 0
  for (let i in arguments) {
    soma += arguments[i]
  }
  return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2, 2))
console.log(soma(2, 2, 2, 2, 2, 2, 2))
console.log(soma(2, 2, ' teste', ' tudo errado isso aqui'))





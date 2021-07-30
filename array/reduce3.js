Array.prototype.meuReduce = function(callback, valorInicial) {
  const inicial = valorInicial ? 0 : 1
  let acc = inicial || this[0]
  for (let i = inicial; i < this.length; i++) {
    acc = callback(acc, this[i], i, this)
  }
  return acc
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5]
console.log(nums.meuReduce(soma))
console.log()
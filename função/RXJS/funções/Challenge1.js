function somar(a) {
  return b => {
    return c => {
      return a + b + c
    }
  }
}

console.log(somar(1)(2)(3))


// -----------------------------
function calcular(x) {
  return y => {
    return fn => {
      return fn(x, y)
    }
  }
}

const sum = (x, y) => x + y
const multiply = (x, y) => x * y 

const resultSum = (calcular(3)(4)(sum))
const resultMultiply = (calcular(3)(4)(multiply))

console.log(resultSum)
console.log(resultMultiply)


// function calcular(n1, n2, fn) {
//   return fn(n1, n2)
// }

// const sum = (n1, n2) => n1 + n2 
// let result = calcular(3, 7, sum)

// console.log(result)
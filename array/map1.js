const nums = [1, 2, 3, 4, 5]
const dobro = item => item * 2
const result = nums.map(dobro)
console.log(result)

const format = el => `R$ ${parseFloat(el).toFixed(2).replace('.', ',')}`
const real = nums.map(format)
console.log(real)

const experimento = nums.map(dobro).map(format)
console.log(experimento)
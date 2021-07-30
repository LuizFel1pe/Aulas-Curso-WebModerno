// Arrow Function, Interpolação

const felizNatal = () => console.log('Feliz Natal!!!')
felizNatal()

const saudacao = nome => `Fala ${nome}, blz?`
console.log(saudacao("Luiz"))

const somar = (...numeros) => {
  console.log(Array.isArray(numeros))
  let total = 0
  for(let n of numeros) {
    total += n
  }
  return total
}
console.log("Soma: ", somar(12,56,45,4,5,87,87,85,46,7))

const potencia = base => exp => Math.pow(base, exp)
console.log("Potência: ", potencia(2)(8))
const pessoa = {
  nome: 'Luiz',
  idade: 17,
  peso: 63.5
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
Object.entries(pessoa)
  .forEach(([chave, valor]) => console.log(`${chave}: ${valor}`))


Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '08/11/2003'
})

console.log(pessoa)


const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 123
console.log(obj)
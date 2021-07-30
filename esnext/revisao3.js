// ES8: Object.values, Object.keys, Object.entries
const obj = { a: 1, b: 2, c: 3, d: 4 }
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

// Melhorias na Notação literal de Objetos
const nome = 'Carla'
const pessoa = {
  // nome: nome
  // ola: function() {}
  nome,
  ola() {
    console.log(`Olá ${nome}`)
  }
}
pessoa.ola()

// Classe
class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'Au Au'
  }
}

console.log(new Cachorro().falar())
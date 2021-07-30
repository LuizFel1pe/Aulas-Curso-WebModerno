// Forma literal...
function fn1() {
  console.log("Olá");
}

fn1()

// Armazenar em uma variavel 
const fn2 = function() {
  console.log("Mesma coisa");
}

fn2()

// Armazenar em array 
const arr = [function(a, b) { return a + b}, fn1, fn2]
console.log(arr[0](5, 5))


// Passagem por parametro
function run(fn) {
  fn()
}

run(function() {
  console.log("RUN")
})

// Retornar uma função
function soma(a, b) {
  return function(c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
function Carro(velocidadeMax = 200, delta = 5) {
  //Atributo privado
  let velocidadeAtual = 0

  // Método público
  this.acelerar = () => {
    if (velocidadeAtual + delta <= velocidadeMax) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMax
    }
  }

  // Método público
  this.getVelocidadeAtual = () => {
    return velocidadeAtual
  }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 27)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
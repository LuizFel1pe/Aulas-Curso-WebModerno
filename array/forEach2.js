const aprovados = ['Agatha', 'Alonso', 'Rafael', 'Michael Jackson']

// for(let i = 0; i < aprovados.length; i++) {
//   console.log(aprovados[i])
// }

Array.prototype.forEach2 = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

aprovados.forEach2((elemento, index, array) => console.log(elemento, index, array))
String.prototype.reverse = function() {
  return this.split('').reverse().join()
}

Array.prototype.last = function() {
  return this[this.length - 1]
}

console.log('Luiz Felipe'.reverse())
console.log([8, 9, 7].last())
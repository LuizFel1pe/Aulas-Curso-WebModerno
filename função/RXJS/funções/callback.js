function exec(fn, a, b) {
  fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (z, w) => console.log(z - w)

exec(somarNoTerminal, 2, 2)
exec(subtrairNoTerminal, 5, 2)

const fn = () => console.log(exec(somarNoTerminal, 2, 5))
setInterval(fn, 1000)
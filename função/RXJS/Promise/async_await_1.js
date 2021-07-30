function esperarPor(tempo) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), tempo)
  })
}

esperarPor(2000)
  .then(() => console.log('Execultando promise 1...'))
  .then(esperarPor)
  .then(() => console.log('Execultando promise 2...'))
  .then(esperarPor)
  .then(() => console.log('Execultando promise 3...'))

async function execultar() {
  await esperarPor(1500)
  console.log('Async await 1')
  await esperarPor(1500)
  console.log('Async await 2')
  await esperarPor(1500)
  console.log('Async await 3')
}

execultar()
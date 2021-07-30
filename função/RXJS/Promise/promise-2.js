setTimeout(() => {
  console.log("2000 ms")
  setTimeout(() => {
    console.log("4000 ms")
    setTimeout(() => {
      console.log("6000 ms")
    }, 2000)
  }, 2000)
}, 2000)


function esperarPor(tempo) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Vish")
    }, tempo)
  })
}

esperarPor(2000)
  .then(esperarPor(2000))
  .then(esperarPor(2000))
  .then(console.log)
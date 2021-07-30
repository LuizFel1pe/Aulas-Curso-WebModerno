// setTimeout(() => {
//   console.log("2000 ms")
//   setTimeout(() => {
//     console.log("4000 ms")
//     setTimeout(() => {
//       console.log("6000 ms")
//     }, 2000)
//   }, 2000)
// }, 2000)


function esperarPor(tempo = 2000) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Execultando Promise')
      resolve()
    }, tempo)
  })
}

esperarPor()
  .then(esperarPor)
  .then(esperarPor)
  
let promessa = new Promise((resolve, reject) => {
  resolve({
    x: 3, 
    y: 5
  })
}).then(({ x, y }) => x + y)
  .then(valor => valor * 7)
  .then(console.log)
const numbers = [1,2,3,4,5,6]
const sum = (acc, item) => acc + item

const avg = (acc, item, i, arr) => {
  if(i === arr.length - 1) {
    return (acc + item) / arr.length
  } else {
    return acc + item
  }
}

console.log(numbers.reduce(sum))
const result = numbers.reduce(avg)

console.log(result)

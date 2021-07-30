const students = [
  {name: "Jake", score: 6.4},
  {name: "Susan", score: 8.6},
  {name: "Emma", score: 9.4},
  {name: "Peter", score: 9.1}
]

const greatStudent = student => student.score >= 9
const getScore = el => el.score
const avg = (acc, item, i, arr) => {
  if(i === arr.length - 1) {
    return (acc + item) / arr.length
  } else {
    return acc + item
  }
}

console.log(
  students
    .filter(greatStudent)
    .map(getScore)
    .reduce(avg)
)
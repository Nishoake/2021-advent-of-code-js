const Input = require('./input')
// const Input = require('./input_sample')

// Parsing the input as an Array of numbers
const getInput = Input.signal.split('\n').map(String)

// Defined function for part1 of the problem
const part1 = (input) => {
  let uniqueSegmentCounter = 0

  // Refactor this code
  for (let i = 0; i < input.length; i++){
    let stringOfInterest = input[i].slice(61).split(' ')
    for (let j = 0; j < stringOfInterest.length; j++){
      if (stringOfInterest[j].length === 2 || stringOfInterest[j].length === 3 || stringOfInterest[j].length === 4 || stringOfInterest[j].length === 7){
        uniqueSegmentCounter++
      }
    }
  }
  
  return uniqueSegmentCounter
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: ... = ${result1}`)


// // Defined function for part2 of the problem
// const part2 = (input) => {
//   console.log(`The parsed input = ${input}`)
// }

// // Execute function for part1 of the problem
// const result2 = part2(getInput)
// console.log(`Part 2: ... = ${result2}`)

// export default {
//   part1,
//   part2,
// }
// const Input = require('./input')
const Input = require('./input_sample')

// Parsing the input as an Array of numbers
const getInput = Input.map.split('\n').map(String)


// Defined function for part1 of the problem
const part1 = (input) => {
  const parsedInput = input.map(line => line.split('').map(Number))
  console.log(`The parsed input = ${parsedInput[1][0]}`)
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
const Input = require('./input')
// const Input = require('./input_sample')

// Parsing the input as an Array of numbers
const getInput = Input.measurements.split('\n').map(Number)


// Defined function for part1 of the problem
const part1 = (input) => {
  let count = 0

  for (let i = 1; i < input.length; i++)  if (input[i] > input[i-1]) count++

  return count
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: ${result1} measurements are larger than the previous measurement`)


// Defined function for part2 of the problem
const part2 = (input) => {
  let count = 0

  // We can simply compare the number entering (i) and leaving (i-3) the window
  // to elegantly achieve the same result
  for (let i = 3; i < input.length; i++) if (input[i] > input[i - 3]) count++

  return count
}

// Execute function for part1 of the problem
const result2 = part2(getInput)
console.log(`Part 2: ${result2} sums are larger than the previous sum`)

// export default {
//   part1,
//   part2,
// }
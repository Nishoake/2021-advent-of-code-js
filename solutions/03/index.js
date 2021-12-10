const Input = require('./input')
// const Input = require('./input_sample')

// Parsing the input as an Array of numbers
const getInput = Input.diagnostics.split('\n').map(String)


// Defined function for part1 of the problem
const part1 = (input) => {
  let counterObject = {}
  let gammaRate = ''
  let espilonRate = ''

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++)  {
      // Evaluates to true if integer is 1
      if (parseInt(input[i][j])) {
        // We use an integer as an object key
        if (counterObject[j]) counterObject[j] += 1
        else counterObject[j] = 1
      }
    }
  }

  for (const column in counterObject ) {
    counterObject[column] > input.length / 2 ? gammaRate += 1 : gammaRate += 0
    counterObject[column] > input.length / 2 ? espilonRate += 0 : espilonRate += 1
  }

  
  console.log(`Gamma Rate = ${gammaRate}`)
  console.log(`Espilon Rate = ${espilonRate}`)

  return parseInt(gammaRate, 2) * parseInt(espilonRate, 2)
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: ... = ${result1}`)


// // Defined function for part2 of the problem
// const part2 = (input) => {
//   console.log(`The parsed input = ${input}`)
  // Use the Gamma Rate value for oxygen generator rating in part two
  // Use the Espilon Rate value for CO2 scrubber rating in part two
  // Remove value from an array at nth place?
  // if (input.length === 1) break
  // Try a recursive approach
// }

// // Execute function for part1 of the problem
// const result2 = part2(getInput)
// console.log(`Part 2: ... = ${result2}`)

// export default {
//   part1,
//   part2,
// }
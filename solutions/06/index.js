const Input = require('./input')
// const Input = require('./input_sample')

// Parsing the input as an Array of numbers
const getInput = Input.ages.split(',').map(Number)


// Defined function for part1 of the problem
const part1 = (input) => {
  const numberOfDays = 80 // Number of days to compute population for

  console.log(`Initial state: ${input}`)

  for (let i = 0; i < numberOfDays; i++) { // Iterate for specified number of days

    let newFishCounter = 0  // Count number of new fish to add; at end of each day resets to 0

    for (let j = 0; j < input.length; j++) { // Iterate over the current school of fish
      
      if (input[j] === 0) { // Check if the current fish's clock is at 0
        input[j] = 6  // ERROR was here since we input[j] === 6 which is a boolean versus assignment and evaluates to 0
        newFishCounter += 1
      } else {
        input[j] -= 1  // Else decrement it's clock by 1 
      }

    }

    while (newFishCounter > 0)  { // After looping through fish add the new fish to end of array
      input.push(8)
      newFishCounter -= 1
    }

    // console.log(`After ${i} day(s): ${input}`)
  }

  return input.length
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: There will ${result1} lanternfish after 80 days`)


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
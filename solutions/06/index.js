const Input = require('./input')
// const Input = require('./input_sample')

// Parsing the input as an Array of numbers
const getInput = Input.ages.split(',').map(Number)


// Defined function for part1 of the problem
const part1 = () => {
  const inputP1 = [...getInput]
  const numberOfDays = 80 // Number of days to compute population for

  for (let i = 0; i < numberOfDays; i++) { // Iterate for specified number of days

    let newFishCounter = 0  // Count number of new fish to add; at end of each day resets to 0

    for (let j = 0; j < inputP1.length; j++) { // Iterate over the current school of fish
      
      if (inputP1[j] === 0) { // Check if the current fish's clock is at 0
        inputP1[j] = 6  // ERROR was here since we input[j] === 6 which is a boolean versus assignment and evaluates to 0
        newFishCounter += 1
      } else {
        inputP1[j] -= 1  // Else decrement it's clock by 1 
      }

    }

    while (newFishCounter > 0)  { // After looping through fish add the new fish to end of array
      inputP1.push(8)
      newFishCounter -= 1
    }
  }

  return inputP1.length
}

// Execute function for part1 of the problem
const result1 = part1()
console.log(`Part 1: There will be ${result1} lanternfish after 80 days`)


// Defined function for part2 of the problem
const part2 = () => {
  const inputP2 = [...getInput]

  const reproductiveClock = new Array(9).fill(0)
  let numberOfDays = 256

  // Load data into reproductiveClock array
  for (let i = 0; i < inputP2.length; i++)  {
    reproductiveClock[inputP2[i]] += 1
  }

  // Implement logic to increment the reproductive clocks
  while (numberOfDays > 0)  {


    // Do we need a temporary variable to nudge all the values to the left?
    let valueQueue = []
    valueQueue.push(reproductiveClock[0])
    let newSpawn = reproductiveClock[0]

    for (let j = reproductiveClock.length - 1; j >= 0; j--) { // Iterate over the current school of fish

      // First we push the current index's value into the queue
      valueQueue.push(reproductiveClock[j])

      // Second we apply a shift operator to the queue to get the first value; store this in 
      // Replace the current index's values with this 
      reproductiveClock[j] = valueQueue.shift()
    }

    // Add the newSpawn value to the index holding fish with internal timer of 6
    reproductiveClock[6] += newSpawn

    numberOfDays--

  }

  // Calculate the total number of fish
  // reducer function
  function getSum(total, num) {
    return total + num
  }
  // Calculate and return result
  const fishSum = reproductiveClock.reduce(getSum, 0)
  return fishSum
}

// Execute function for part1 of the problem
const result2 = part2()
console.log(`Part 2: There will be ${result2} lanternfish after 256 days`)

// export default {
//   part1,
//   part2,
// }
const Input = require('./input')
// const Input = require('./input_sample')

// Parsing the input as an Array of numbers
const getInput = Input.position.split(',').map(Number)

// Utility Function
function quickSort(array) {
  if (array.length <= 1) return array

  const pivot = array[array.length - 1]
  const leftArr = []
  const rightArr = []

  for (const num of array.slice(0, array.length - 1)) {
    num < pivot ? leftArr.push(num) : rightArr.push(num)
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

// Defined function for part1 of the problem
const part1 = (input) => {

  const sortedInput = quickSort(input)

  // Calculate the median
  let median
  const length = sortedInput.length
  length % 2 === 0 ? median = (sortedInput[length / 2 - 1] + sortedInput[length / 2]) / 2 
    : median = sortedInput[length / 2]

  // Calculate the fuel cost
  let fuelCost = 0
  for (let i = 0; i < length; i++)  fuelCost += Math.abs(median - sortedInput[i])

  return fuelCost
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: The cheapest possible outcome when fuel is burned at a constant rate = ${result1}`)


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
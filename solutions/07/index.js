const Input = require('./input')
// const Input = require('./input_sample')

// Parsing the input as an Array of numbers
const getInput = Input.position.split(',').map(Number)

// Utility Functions
// quickSort function
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

// reducer function
function getSum(total, num) {
  return total + num
}

// consecutive series sum
function getSeriesSum(num)  {
  return num/2 * (1 + num)
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


// Defined function for part2 of the problem
const part2 = (input) => {
  // Calculate the average
  const setSum = input.reduce(getSum, 0)
  const setAvg = setSum / input.length

  // Round the average both up and down
  const roundUp = Math.ceil(setAvg)
  const roundDown = Math.floor(setAvg)

  // Calculate the fuel cost for both the rounded up & down averages
  let ruFuelcost = 0
  let rdFuelcost = 0
  for (let i = 0; i < input.length; i++){
    ruFuelcost += getSeriesSum(Math.abs(roundUp - input[i]))
    rdFuelcost += getSeriesSum(Math.abs(roundDown - input[i]))
  }

  // Return the lower of the values
  return ruFuelcost <= rdFuelcost ? ruFuelcost : rdFuelcost
}

// Execute function for part1 of the problem
const result2 = part2(getInput)
console.log(`Part 2: The cheapest possible outcome when fuel is burned at a linear rate = ${result2}`)

// export default {
//   part1,
//   part2,
// }
const Input = require('./input')
// const Input = require('./input_sample')

// Parsing the input as an Array of numbers
const getInput = Input.diagnostics.split('\n').map(String)

const findBitFrequency = (input) => {
  const counterObject = {}

  // Iterate over the input array to find frequency of the '1' bit
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      // Evaluates to true if integer is 1
      if (parseInt(input[i][j])) {
        // We use an integer as an object key
        if (counterObject[j]) counterObject[j] += 1
        else counterObject[j] = 1
      }
    }
  }
  return counterObject
}

const findMostCommonBit = (input, index) => {
  let counter = 0

  // Iterate over the input array to find frequency of the '1' bit
  for (let i = 0; i < input.length; i++) {
    if (parseInt(input[i][index])) counter++
  }
  
  const mostCommon = (counter >= input.length / 2) ? "1" : "0"
  return mostCommon
}

const findLeastCommonBit = (input, index) => {
  let counter = 0

  // Iterate over the input array to find frequency of the '1' bit
  for (let i = 0; i < input.length; i++) {
    if (parseInt(input[i][index])) counter++
  }

  const leastCommon = (counter >= input.length / 2) ? "0" : "1"
  return leastCommon
}

const getGammaRate = (counterObject, input) => {
  let gammaRate = ''
  for (const column in counterObject) counterObject[column] >= input.length / 2 ? gammaRate += 1 : gammaRate += 0
  return gammaRate
}

const getEspilonRate = (counterObject, input) => {
  let espilonRate = ''
  for (const column in counterObject) counterObject[column] > input.length / 2 ? espilonRate += 0 : espilonRate += 1
  return espilonRate
}

// Defined function for part1 of the problem
const part1 = (input) => {
  const counterObject = findBitFrequency(input)
  const SubmarinePowerConsumption = parseInt(getGammaRate(counterObject, input), 2) * parseInt(getEspilonRate(counterObject, input), 2)

  return SubmarinePowerConsumption
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: ... = ${result1}`)


// Defined function for part2 of the problem
const part2 = (input) => {

  // Function to find the single matching number for oxygenGeneratorRating
  const getOGR = (input, columnNumber) => {
    if (input.length === 1 ) return input[0]

    const target = findMostCommonBit(input, columnNumber)

    const subArray = input.filter(bit => bit[columnNumber] === target)

    return getOGR(subArray, columnNumber + 1)
  }

  // Function to find the single matching number for co2ScrubberRating
  const getCSR = (input, columnNumber) => {
    if (input.length === 1 ) return input[0]

    const target = findLeastCommonBit(input, columnNumber)

    const subArray = input.filter(bit => bit[columnNumber] === target)

    return getCSR(subArray, columnNumber + 1)
  }
  
  const oxygenGeneratorRating = getOGR(input, 0)
  const co2ScrubberRating = getCSR(input, 0)
  const lifeSupportRating = parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2)

  return lifeSupportRating
}

// Execute function for part1 of the problem
const result2 = part2(getInput)
console.log(`Part 2: ... = ${result2}`)

// export default {
//   part1,
//   part2,
// }
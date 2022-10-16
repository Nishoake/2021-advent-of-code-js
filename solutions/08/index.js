const Input = require('./input')
// const Input = require('./input_sample')

// Parsing the input as an Array of numbers
const getInput = Input.signal.split('\n').map(String)

// Defined function for part1 of the problem
const part1 = (input) => {
  let uniqueSegmentCounter = 0

  // Refactor this code
  for (let i = 0; i < input.length; i++){
    // Slice is used to parse the output numbers only which begin on index 61
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


// Defined function for part2 of the problem
const part2 = (input) => {
  let totalSum = 0

   // Refactor this code
   for (let i = 0; i < input.length; i++){
    // Declare constants and helper functions:
    let sum = ''
    let decoded = {}

    const normalizeNum = num => {
      const alphabeticalCode = num.split("").sort().join('')
      return alphabeticalCode
    }

    const decodeNum = (arr, num) =>  {
      const decoded = arr.find(code => {
        return code.length === num
      })
      return decoded
    }

    const createGroup = (arr, num) => {
      const group = arr.filter(code =>  {
        return code.length === num
      })

      return group
    }

    /*
      benchMark refers to the coded string for the number which is a subset of the number we are looking for
      Ex. 4's coded string is a subset of the coded string for 9
    */
    const findNum = (arr, benchMark, length) => {
      const result = arr.find(code =>  {
        const testString = new RegExp('[' + benchMark + ']', 'gm')
        // The match function works despite the order of characters in the string
        const matchArr = code.match(testString)
        // Check if the exact number of letter matches
        return matchArr.length === length
      })

      return result
    }

    const invertObjectKeyValues = data =>  {
      const flipped = Object.entries(data).map(([key, value]) => [value, key])
      const hash = Object.fromEntries(flipped)
      return hash
    }

    // Slice is used to parse the output numbers only which begin on index 61
    const rawInputNumbers = input[i].slice(2,60).split(' ')
    const rawOutputNumbers = input[i].slice(63).split(' ')

    const inputNumbers = rawInputNumbers.map(num => normalizeNum(num))
    const outputNumbers = rawOutputNumbers.map(num => normalizeNum(num))
    
    // Add the codes for 1,4,7,8 into a decoded object
    decoded['1'] = decodeNum(inputNumbers, 2)
    decoded['4'] = decodeNum(inputNumbers, 4)
    decoded['7'] = decodeNum(inputNumbers, 3)
    decoded['8'] = decodeNum(inputNumbers, 7)

    // Grouping numbers with same number of segments
    const groupOf5 = createGroup(inputNumbers, 5)
    const groupOf6 = createGroup(inputNumbers, 6)

    // Decode the remaining numbers
    decoded['9'] = findNum(groupOf6, decoded['4'], 4)
    decoded['6'] = findNum(groupOf6, decoded['1'], 1)
    decoded['3'] = findNum(groupOf5, decoded['1'], 2)
    decoded['5'] = findNum(groupOf5, decoded['6'], 5)
    decoded['0'] = groupOf6.filter(code => code !== decoded['6'] && code !== decoded['9'])[0]
    decoded['2'] = groupOf5.filter(code => code !== decoded['3'] && code !== decoded['5'])[0]

    // Invert the decoded object
    const dictionary = invertObjectKeyValues(decoded)
    outputNumbers.map(code => {
      sum += dictionary[code]
    })

    totalSum += parseInt(sum)
  }
  return totalSum
}
const result2 = part2(getInput)
console.log(`Part 2: ... = ${result2}`)

// export default {
//   part1,
//   part2,
// }
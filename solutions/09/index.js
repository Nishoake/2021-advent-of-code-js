const Input = require('./input')
// const Input = require('./input_sample')

// Parsing the input as an Array of numbers
const getInput = Input.heightmap.split('\n').map(String)

// Utility Functions
const findAdjacentLocations = (i, j, xLength, yLength) => {
  const potentialAdjacentLocations = [[1,0], [0,1], [-1,0], [0,-1]]
  
  const validAdjacentLocations = []
  potentialAdjacentLocations.forEach(location => {
    const x = i + location[0]
    const y = j + location[1]

    const xIsInBounds = x >= 0 && x < yLength
    const yIsInBounds = y >= 0 && y < xLength

    if (xIsInBounds && yIsInBounds){
      validAdjacentLocations.push([x,y])
    }
  })

  return validAdjacentLocations
}


// Defined function for part1 of the problem
const part1 = (input) => {
  const parsedInput = input.map(line => line.split('').map(Number))
  console.table(parsedInput)

  // Declare constants
  const xLength = parsedInput[0].length
  const yLength = parsedInput.length
  let riskLevel = 0

  for (let i = 0; i < yLength; i++){
    for (let j = 0; j < xLength; j++){
      const neighbours = findAdjacentLocations(i, j, xLength, yLength)

      const isHigher = value => {
        const x = value[0]
        const y = value[1]

        return parsedInput[x][y] > parsedInput[i][j]
      }

      const isLowestPoint = neighbours.every(isHigher)

      if(isLowestPoint) riskLevel += parsedInput[i][j] + 1
    }
  }

  return riskLevel
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: The sum of the risk levels of all low points on the heightmap = ${result1}`)


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
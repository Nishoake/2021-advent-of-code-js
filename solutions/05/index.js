const Input = require('./input')
// const Input = require('./input_sample')

// Parsing the input as an Array of numbers
const getInput = Input.lines.split('\n').map(String)
const cleanedInput = getInput.map(line => line
  .replace(/ -> /g, ","))
  .join()
  .toString()
  .split(",")
  .map(numString => parseInt(numString))

// Defined function for part1 of the problem
const part1 = () => {

  // Define object to store points and overlaps as well as counter variable
  let hydrothermalVentCoordinates = {}
  let overlapCounter = 0

  for (let i = 0; i < cleanedInput.length; i += 4) {
    // Check for horizontal or vertical lines
    const horizontalLineCheck = cleanedInput[i] === cleanedInput[i+2]
    const verticalLineCheck = cleanedInput[i+1] === cleanedInput[i+3]

    if (horizontalLineCheck){
      // Initializing the Y-Coordinates
      const y2 = cleanedInput[i + 1] < cleanedInput[i + 3] ? cleanedInput[i + 3] : cleanedInput[i + 1]
      let y1 = cleanedInput[i + 1] === y2 ? cleanedInput[i + 3] : cleanedInput[i + 1]

      const xCoord = cleanedInput[i]

      while (y1 <= y2) {
        // Check if coordinate does not exist in object
        if (!hydrothermalVentCoordinates[`${xCoord},${y1}`]) hydrothermalVentCoordinates[`${xCoord},${y1}`] = 0
        
        // increment the count up by 1
        hydrothermalVentCoordinates[`${xCoord},${y1}`] += 1

        // Check to see if the count is exactly 2 to prevent double counting
        if (hydrothermalVentCoordinates[`${xCoord},${y1}`] === 2) overlapCounter++
        y1++
      }
    } else if (verticalLineCheck){
      // Initializing the X-Coordinates
      const x2 = cleanedInput[i] < cleanedInput[i + 2] ? cleanedInput[i + 2] : cleanedInput[i]
      let x1 = cleanedInput[i] === x2 ? cleanedInput[i + 2] : cleanedInput[i]

      const yCoord = cleanedInput[i + 1]

      while (x1 <= x2) {
        // Check if coordinate does not exist in object
        if (!hydrothermalVentCoordinates[`${x1},${yCoord}`]) hydrothermalVentCoordinates[`${x1},${yCoord}`] = 0
        
        // increment the count up by 1
        hydrothermalVentCoordinates[`${x1},${yCoord}`] += 1

        // Check to see if the count is exactly 2 to prevent double counting
        if (hydrothermalVentCoordinates[`${x1},${yCoord}`] === 2) overlapCounter++
        x1++
      }
    }
  }

  return overlapCounter
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
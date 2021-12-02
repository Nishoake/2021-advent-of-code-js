const Input = require('./input')
// const Input = require('./input_sample')

// Parsing the input as an Array of numbers
const getInput = Input.commands.split('\n').map(String)


// Defined function for part1 of the problem
const part1 = (input) => {
  let depth = 0
  let breadth = 0
  
  for (let i = 0; i < input.length; i++)  {
    // Parse String using RegEx and convert value into Int
    const parsed = input[i].match(/(\w*)\s(\d*)/)
    const direction = parsed[1]
    const value = parseInt(parsed[2])
    
    switch (direction) {
      case 'up':
        depth -= value
        break;
      case 'down':
        depth += value
        break;
      case 'forward':
        breadth += value
        break;
    }
  }

  return depth * breadth
}

// Execute function for part1 of the problem
const result1 = part1(getInput)
console.log(`Part 1: You get = ${result1}, if you multiply your final horizontal position by your final depth`)


// Defined function for part2 of the problem
const part2 = (input) => {
  let depth = 0
  let breadth = 0
  let aim = 0

  for (let i = 0; i < input.length; i++) {
    // Parse String using RegEx and convert value into Int
    const parsed = input[i].match(/(\w*)\s(\d*)/)
    const direction = parsed[1]
    const value = parseInt(parsed[2])

    switch (direction) {
      case 'up':
        aim -= value
        break;
      case 'down':
        aim += value
        break;
      case 'forward':
        breadth += value
        depth += aim * value
        break;
    }
  }

  return depth * breadth
}

// Execute function for part1 of the problem
const result2 = part2(getInput)
console.log(`Part 2: You get = ${result2}, if you multiply your final horizontal position by your final depth`)

// export default {
//   part1,
//   part2,
// }
// const Input = require('./input')
const Input = require('./input')

// Parsing the input as an Array of numbers
const getInput = Input.bingo.split('\n\n').map(String)

// Parsing the cards
const parsedInput = getInput.map(line => line
  .replace(/[\n ,]+/g, " ")
  .trim()
  .split(" ")
  .map(numString => parseInt(numString))
)

// Destructuring parsed data
const [numbersCalled, ...unmutatedBingoBoards] = parsedInput

// Utility Functions
function checkBingo(index)  {

}

// Defined function for part1 of the problem
const part1 = () => {

  const bingoBoards = [...unmutatedBingoBoards]

  // Logic for determining bingo
  for (let i = 0; i < numbersCalled.length; i++)  {
    for (let j = 0; j < bingoBoards.length; j++) {
      // Check if number exists in bingo board
      const numCheck = bingoBoards[j].indexOf(numbersCalled[i])

      if (numCheck !== -1)  {
        // toggle to 0
        bingoBoards[j][numCheck] = 0
        // Determine the row and column
        const row = Math.floor(numCheck / 5)
        const column = numCheck % 5

        // Check for bingo
        const rowCheck = (bingoBoards[j][row * 5 + 0] === 0 && bingoBoards[j][row * 5 + 1] === 0 && bingoBoards[j][row * 5 + 2] === 0 && bingoBoards[j][row * 5 + 3] === 0 && bingoBoards[j][row * 5 + 4] === 0)
        const columnCheck = (bingoBoards[j][column] === 0 && bingoBoards[j][column + 5] === 0 && bingoBoards[j][column + 10] === 0 && bingoBoards[j][column + 15] === 0 && bingoBoards[j][column + 20] === 0)
        const bingoCheck = rowCheck || columnCheck

        if (bingoCheck) {
          // reducer function
          function getSum(total, num) {
            return total + num
          }
          // Calculate and return result
          const remainderSum = bingoBoards[j].reduce(getSum, 0)
          const result = remainderSum * numbersCalled[i]
          return result
        }
      }
    }
  }

  console.log(`No Bingo`)

}

// Execute function for part1 of the problem
const result1 = part1()
console.log(`Part 1: ... = ${result1}`)


// Defined function for part2 of the problem
const part2 = () => {
  const bingoBoards = [...unmutatedBingoBoards]
  let numberOfBingos = 0

  // Logic for determining bingo
  for (let i = 0; i < numbersCalled.length; i++) {
    for (let j = 0; j < bingoBoards.length; j++) {
      // Check if number exists in bingo board
      const numCheck = bingoBoards[j].indexOf(numbersCalled[i])

      if (numCheck !== -1) {
        // toggle to 0
        bingoBoards[j][numCheck] = 0
        // Determine the row and column
        const row = Math.floor(numCheck / 5)
        const column = numCheck % 5

        // Check for bingo
        const rowCheck = (bingoBoards[j][row * 5 + 0] === 0 && bingoBoards[j][row * 5 + 1] === 0 && bingoBoards[j][row * 5 + 2] === 0 && bingoBoards[j][row * 5 + 3] === 0 && bingoBoards[j][row * 5 + 4] === 0)
        const columnCheck = (bingoBoards[j][column] === 0 && bingoBoards[j][column + 5] === 0 && bingoBoards[j][column + 10] === 0 && bingoBoards[j][column + 15] === 0 && bingoBoards[j][column + 20] === 0)
        const bingoCheck = rowCheck || columnCheck

        if (bingoCheck) {
          if (numberOfBingos === bingoBoards.length - 1) {
            // reducer function
            function getSum(total, num) {
              return total + num
            }
            // Calculate and return result
            const remainderSum = bingoBoards[j].reduce(getSum, 0)
            const result = remainderSum * numbersCalled[i]
            return result
          }
          // Else we will remove the specific board from the bingoBoard array
          bingoBoards[j] = [0]
          numberOfBingos++
        }
      }
    }
  }
}

// Execute function for part1 of the problem
const result2 = part2()
console.log(`Part 2: ... = ${result2}`)

// export default {
//   part1,
//   part2,
// }
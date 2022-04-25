function quickSort(array) {
  // Terminating Condition
  if (array.length <= 1)  return array

  // Initialize variables
  const pivot = array[array.length - 1]
  const leftArr = []
  const rightArr = []

  // Sort numbers into left and right arrays
  // Slice is used to omit the last element, the pivot
  for (const num of array.slice(0, array.length - 1))  {
    // Deploy a ternary operator to make conditional more compact
    num < pivot ? leftArr.push(num) : rightArr.push(num)
  }

  // Recursively call quickSort function
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

console.log(`Result = ${quickSort(arr)}`) 
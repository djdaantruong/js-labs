// write function to find max

// for i
function findMax(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1

  let result = numberList[0]
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > result) {
      result = numberList[i]
    }
  }
  return result
}

console.log(findMax([1, 9, 6, 8]))

// for each
function findMaxForEach(numberList) {
  let max = numberList[0]
  numberList.forEach((x) => {
    if (x > max) {
      max = x
    }
  })
  return max
}

console.log(findMaxForEach([1, 9, 6, 8]))

// reduce
function findMaxReduce(numberList) {
  let max = numberList[0]
  return numberList.reduce((max, number) => (number > max ? number : max))
}

console.log(findMaxReduce([1, 9, 6, 8]))

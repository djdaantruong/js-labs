function calcAvgOfAllEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0

  const evenNum = numberList.filter((n) => n % 2 === 0)
  if (evenNum.length === 0) return 0
  const sum = evenNum.reduce((a, b) => a + b, 0)
  return Math.ceil(sum / evenNum.length || 0)
}

// if (!Array.isArray(numberList) || numberList.length === 0) return 0

// const evenNum = numberList.filter((n) => n % 2 === 0)
// if (evenNum.length === 0) return 0

// return Math.ceil(
//   evenNum.reduce((sum, num, _, { length }) => (sum + num) / length)
// )
console.log(calcAvgOfAllEvenNumbers(1))
console.log(calcAvgOfAllEvenNumbers([]))
console.log(calcAvgOfAllEvenNumbers([1]))
console.log(calcAvgOfAllEvenNumbers([1, 2]))
console.log(calcAvgOfAllEvenNumbers([1, 2, 4]))
console.log(calcAvgOfAllEvenNumbers([1, 2, 4, 8]))
console.log(calcAvgOfAllEvenNumbers([8, 4, 8]))

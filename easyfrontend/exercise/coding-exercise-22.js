// for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false

  let result = true
  for (let i = 0; i < numberList.length; i++) {
    if (!isPerfectNumber(numberList[i])) return (result = false)
  }
  return result
}
function isPerfectNumber(n) {
  if (n <= 5) return false
  const result = Array.from({ length: n }, (v, i) => i).filter(
    (x) => n % x === 0
  )
  return result.reduce((sum, x) => sum + x) === n ? true : false
}

// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
function isAllPerfectNumbersV2(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false
  let result = true
  numberList.forEach((num) => {
    if (!isPerfectNumber(num)) return (result = false)
  })
  return result
}

// every
function isAllPerfectNumbersV3(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false
  const result = numberList.every((num) => isPerfectNumber(num))
  return result ? true : false
}

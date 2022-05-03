// Using loop from 2 to square root of n
function isPrime(n) {
  // your code here
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false
  }
  return n > 1
}

//  for...i
function hasPrimeV1(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false
  let result = false
  for (let i = 0; i < numberList.length; i++) {
    if (isPrime(numberList[i])) return (result = true)
  }
  return result
}

//  forEach
function hasPrimeV2(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false
  let result = false
  numberList.forEach((num) => {
    if (isPrime(num)) return (result = true)
  })
  return result
}

//  find
function hasPrimeV3(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false
  const result = numberList.find((num) => isPrime(num))
  return result ? true : false
}

//  findIndex
function hasPrimeV4(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false
  const result = numberList.findIndex((num) => isPrime(num))
  return result !== -1 ? true : false
}

//  some
function hasPrimeV5(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false
  const result = numberList.some((num) => isPrime(num))
  return result ? true : false
}

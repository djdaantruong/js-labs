// Using loop from 2 to n - 1
function isPrimeV1(n) {
  // your code here
  if (n <= 1) {
    return false
  } else if (n === 2) {
    return true
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }
}
console.log(isPrimeV1(2))
console.log(isPrimeV1(3))
console.log(isPrimeV1(4))

// Using loop from 2 to square root of n
function isPrimeV2(n) {
  // your code here
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false
  }
  return n > 1
}
console.log(isPrimeV2(2))
console.log(isPrimeV2(3))
console.log(isPrimeV2(4))

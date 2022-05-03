function isPerfectNumber(n) {
  // your code here
  if (n <= 5) return false
  const result = Array.from({ length: n }, (v, i) => i).filter(
    (x) => n % x === 0
  )
  return result.reduce((sum, x) => sum + x) === n ? true : false
}

console.log(isPerfectNumber(6))
console.log(isPerfectNumber(10))

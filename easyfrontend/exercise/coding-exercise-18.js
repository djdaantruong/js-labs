// using for...i to loop from 1 to n
function getDivisorListV1(n) {
  // your code here
  let result = []
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      result.push(i)
    }
  }
  return result
}

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
  // your code here
  return Array.from({ length: n + 1 }, (v, i) => i).filter((x) => n % x === 0)
}

// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
  // your code here
  if (Math.sqrt(n) === 1) return [1]
  const result = []
  Array.from({ length: Math.sqrt(n) }, (v, i) => i + 1).forEach((x) => {
    if (n % x === 0) {
      result.push(x, n / x)
    }
    return result
  })

  return result.sort((a, b) => a - b)
}

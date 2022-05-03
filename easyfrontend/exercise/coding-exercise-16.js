// Coding Exercise 16: Liệt kê các số trong khoảng [a, b]
// using for...i
function createArrayInRangeV1(a, b) {
  // your code here
  if (a > b || b >= 100 || a <= -100) return undefined
  let arr = []
  for (let i = a; i <= b; i++) {
    arr.push(i)
  }
  return arr
}

console.log(createArrayInRangeV1(-5, 5))

// using Array.from()
function createArrayInRangeV2(a, b) {
  // your code here
  if (a > b || b >= 100 || a <= -100) return undefined
  let length = b - a + 1
  return Array.from({ length: length }, (v, i) => a + i)
}
console.log(createArrayInRangeV2(1, 5))

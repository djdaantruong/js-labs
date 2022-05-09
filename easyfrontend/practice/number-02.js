//321
export function isDecreasingNumberV1(n) {
  if (n < 10 || n > 1000000) return false
  let num = n
  let digit = 0
  while (num > 0) {
    let lastDigit = num % 10
    if (lastDigit <= digit) return false
    digit = lastDigit
    num = Math.trunc(num / 10)
  }
  return true
}

export function isIncreasingNumberV2(n) {
  if (n < 10 || n > 1000000) return false
  const numString = n.toString()
  for (let i = 1; i < numString.length; i++) {
    if (numString[i] >= numString[i - 1]) return false
  }
  return true
}

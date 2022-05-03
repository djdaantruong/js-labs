function getMaxDigits(n) {
  if (n < 0 || n >= 1000) return -1

  const ones = n % 10
  const tens = Math.trunc((n % 100) / 10)
  const hunreds = Math.trunc(n / 100)

  let maxDigit = ones
  if (tens > maxDigit) maxDigit = tens
  if (hunreds > maxDigit) maxDigit = hunreds

  return maxDigit
}

console.log(
  '🚀 ~ file: coding-exercise-4.js ~ line 2 ~ getMaxDigits ~ getMaxDigits:',
  getMaxDigits(-0)
)

function isSymmetricNumber(n) {
  if (n < 0 || n >= 1000) return -1

  const ones = n % 10
  const tens = Math.trunc((n % 100) / 10)
  const hunreds = Math.trunc(n / 100)

  let result = true

  if (n < 10) return result

  if (n < 100) {
    if (ones != tens) result = false
  }

  if (n >= 100) {
    if (ones != hunreds) result = false
  }

  return result
}

console.log(
  '🚀 ~ file: coding-exercise-6.js ~ line 2 ~ isSymmetricNumber ~ isSymmetricNumber',
  isSymmetricNumber(444)
)

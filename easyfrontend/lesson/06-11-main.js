function sumDigits(n) {
  if (n.toString().length !== 3) return -1

  const ones = n % 10
  const tens = Math.trunc((n % 100) / 10)
  const hunreds = Math.trunc(n / 100)

  return ones + tens + hunreds
}

console.log(
  '🚀 ~ file: 06-10-main.js ~ line 2 ~ findMax ~ findMax:',
  sumDigits(123)
)

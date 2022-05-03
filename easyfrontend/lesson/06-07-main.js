function randomInRange(a, b) {
  if (a >= b) return -1

  const random = Math.random(a, b) * (b - a)
  return Math.round(random) + a
}

console.log(
  '🚀 ~ file: 06-07-main.js ~ line 2 ~ randomInRange ~ randomInRange',
  randomInRange(1, 100)
)

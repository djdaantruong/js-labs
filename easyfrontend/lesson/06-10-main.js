function findMax(a, b, c) {
  let max = a

  if (b > max) max = b
  if (c > max) max = c

  return max
}

console.log(
  '🚀 ~ file: 06-10-main.js ~ line 2 ~ findMax ~ findMax:',
  findMax(3, 7, 9)
)

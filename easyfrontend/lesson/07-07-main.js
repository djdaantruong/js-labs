// write a function to transform a String
// - the first letter in UPPERCASE
// - the rest in lowercase
// Eg: capitalize('easy FRontend') --> 'Easy Frontend'
// p1.toUpperCase()
// p2.toLowerCase()
// p1p2

function capotalize(str) {
  if (str === '') return ''

  const firstLetter = str[0].toUpperCase()
  const rest = str.slice(1).toLowerCase()

  return `${firstLetter}${rest}`
}

console.log(
  '🚀 ~ file: 07-07-main.js ~ line 10 ~ capotalize ~ capotalize',
  capotalize('easy FRontend')
)

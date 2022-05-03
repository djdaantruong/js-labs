function findSecret(code) {
  // your code here
  const lower = code.toLowerCase()

  let result = ''
  for (let i = 0; i < code.length; ++i) {
    if (code[i] === lower[i]) result += code[i]
  }
  return result
}
console.log(
  '🚀 ~ file: coding-exercise-12.js ~ line 2 ~ findSecret ~ findSecret',
  findSecret('eaHGSJsyHGSBfrontHGSVend')
)
//Solution Stackoverflow
// function removeSpecials(str) {
//   var lower = str.toLowerCase()
//   var upper = str.toUpperCase()

//   var res = ''
//   for (var i = 0; i < lower.length; ++i) {
//     if (lower[i] != upper[i] || lower[i].trim() === '') res += str[i]
//   }
//   return res
// }

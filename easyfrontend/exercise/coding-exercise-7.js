function removeVowel(str) {
  // your code here
  if (str === '') return ''

  const lastStr = str.replace(/[ueoai]/g, '')

  return lastStr.trim()
}

console.log(
  '🚀 ~ file: coding-exercise-7.js ~ line 2 ~ removeVowel ~ removeVowel',
  removeVowel('say hello') //sy hll
)

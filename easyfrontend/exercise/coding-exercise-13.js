function capitalize(str) {
  if (str === '') return ''

  const trimmedStr = str.trim().toUpperCase()
  return `${trimmedStr[0]}${trimmedStr.slice(1).toLowerCase()}`
}
function getFullName(firstName, lastName) {
  // your code here
  const firstN = capitalize(firstName || '')
  const lastN = capitalize(lastName || '')
  const trueName = `${firstN} ${lastN}`
  return trueName.trim()
}
console.log(
  '🚀 ~ file: coding-exercise-13.js ~ line 2 ~ getFullName ~ getFullName',
  getFullName('alice')
)

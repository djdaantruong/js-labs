// every v2
function checkIfAllEven(numberList) {
  if (!Array.isArray(numberList)) return false
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false
  }
  return true
}
console.log(checkIfAllEven([2, 1, 3]))
console.log(checkIfAllEven([2, 4, 6]))

// some
function checkIfAllEven(numberList) {
  if (!Array.isArray(numberList)) return false
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 == 0) return true
  }
  return false
}
console.log(checkIfAllEven([5, 1, 3]))
console.log(checkIfAllEven([2, 4, 6]))

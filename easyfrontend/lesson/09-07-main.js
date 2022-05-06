// every v2
export function checkIfAllEvenV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false
  }
  return true
}
// console.log(checkIfAllEven([2, 1, 3]))
// console.log(checkIfAllEven([2, 4, 6]))

// some
export function checkIfAllEvenV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false
  let isValid = true
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) {
      isValid = false
      break
    }
  }
  return isValid
}
// console.log(checkIfAllEven([5, 1, 3]))
// console.log(checkIfAllEven([2, 4, 6]))

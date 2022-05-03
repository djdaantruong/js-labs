// using for...i
function transformNumbersV1(numberList) {
  if (numberList.length <= 1) return [...numberList]
  const result = [...numberList]
  for (let i = 0; i < numberList.length; i++) {
    result[i] =
      numberList[i - 1] + numberList[i + 1] ||
      numberList[i - 1] ||
      numberList[i + 1]
  }
  return result
}
console.log(transformNumbersV1([]))
console.log(transformNumbersV1([5, 10]))
console.log(transformNumbersV1([2, 4, 6, 8]))

// using forEach()

function transformNumbersV2(numberList) {
  if (numberList.length <= 1) return [...numberList]
  let result = []
  if (numberList.length === 1) result.push(numberList[0])
  if (numberList.length === 2) {
    result[0] = numberList[1]
    result[numberList.length - 1] = numberList[numberList.length - 2]
  } else if (numberList.length > 2) {
    numberList.forEach((i, idx) => {
      result[idx] =
        numberList[idx - 1] + numberList[idx + 1] ||
        numberList[idx - 1] ||
        numberList[idx + 1]
    })
  }
  return result
}

console.log(transformNumbersV2([]))
console.log(transformNumbersV2([5, 10]))
console.log(transformNumbersV2([2, 4, 6, 8]))

// using map()
function transformNumbersV3(numberList) {
  if (numberList.length <= 1) return [...numberList]
  return numberList.map((x, idx) => {
    const beginNumber = numberList[idx - 1] || 0
    const lastNumber = numberList[idx + 1] || 0
    return beginNumber + lastNumber
  })
}
console.log(transformNumbersV3([]))
console.log(transformNumbersV3([5, 10]))
console.log(transformNumbersV3([2, 4, 6, 8]))

// export function findAllPositiveEvenSubArr(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return []

//   const subArrayList = []
//   let subArray = []

//   for (let i = 0; i < numberList.length; i++) {
//     if (numberList[i] % 2 === 0 && numberList[i + 1] % 2 === 0) {
//       subArray.push(numberList[i], numberList[i + 1])
//     }

//     if (
//       (subArray.length > 0 && numberList[i] % 2 === 1) ||
//       i === numberList.length - 1
//     ) {
//       subArrayList.push(subArray)
//       subArray = []
//     }
//   }
//   return subArrayList
// }

// console.log(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20]))
// console.log(findAllPositiveEvenSubArr([1, 9, 3, 5, 11]))
// should return
// [
// [2, 4],
//   [10, 20]
// ]

export function findAllPositiveEvenSubArr(numberList) {
  const result = []
  let subArray = []
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      subArray.push(numberList[i])
    }
    if (i == numberList.length - 1 || numberList[i] % 2 === 1) {
      subArray.length > 1 && result.push(subArray)
      subArray = []
    }
  }
  return result
}

console.log(findAllPositiveEvenSubArr([1, 2, 4, 7, 10, 5, 6, 8, 20, 5]))
console.log(findAllPositiveEvenSubArr([1, 9, 3, 5, 11]))

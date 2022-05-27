// P1: add unique number to a new array --> length

// export function countUniqueNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0

//   const uniqueNumberList = []

//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i]
//     if (!uniqueNumberList.includes(number)) uniqueNumberList.push(number)
//   }

//   return uniqueNumberList.length
// }

// console.log(countUniqueNumbers([1, 2, 3]))

// P2: using object mapmap --> get key of object
//[1, 2, 2, 3]
// {}
// {1: true, 2: true}
// [1, 2].length

// export function countUniqueNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0

//   const flag = {}

//   for (let i = 0; i < numberList.length; i++) {
//     const element = numberList[i]
//     flag[element] = true
//   }

//   return Object.keys(flag).length
// }

//using reduce
export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0

  const flag = numberList.reduce((flag, number) => {
    flag[number] = true
    return flag
  }, {})

  return Object.keys(flag).length
}

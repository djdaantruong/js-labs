//findIndex
function findFirstEven(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return undefined

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i]
    if (callbackFn(number, i)) {
      return i
    }
  }
  return undefined
}
function isEven(number) {
  return number % 2 === 0
}

//console.log(findFirstEven([1, 2, 4, 5], isEven))
console.log(findFirstEven([1, 2, 4, 5], (number) => number % 2 === 0))

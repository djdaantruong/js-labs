//map(arr, callbackFn)
//callbackFn return element is changed
//mappingFn (callbackFn)

function map(arr, mappingFn) {
  if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined

  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    const newElement = mappingFn(element, i)
    newArr.push(newElement)
  }
  return newArr
}

console.log(map([1, 2, 4, 5], (x) => (x % 2 === 0 ? x + 1 : x + 2))) //[ 3, 3, 5, 7 ]

//map
const numberList = [1, 3, 5, 7]
numberList.map((x) => x + 1) // [2, 4, 6, 8]
numberList.map((x) => x * 2) // [ 2, 6, 10, 14]

const wordList = ['easy', 'frontend']
wordList.map((x) => x.length) // [4, 8]
wordList.map((x) => `super-${x}`) // ['super-easy', 'super-frontend']

//filte(arr, callbackFn)
//callbackFn return true or false

function filter(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined

  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]

    if (callbackFn(element, i)) {
      newArr.push(element)
    }
  }

  return newArr
}

console.log(filter([1, 2, 4, 5], (x) => x % 2 === 1)) //[ 1, 5 ]

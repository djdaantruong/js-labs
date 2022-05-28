export function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined

  const statistics = {}
  let maxKey = undefined

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i]

    statistics[number] =
      statistics[number] === undefined ? 1 : statistics[number] + 1

    if (maxKey === undefined || statistics[number] > statistics[maxKey]) {
      maxKey = number
    }
  }

  return Number.parseInt(maxKey)
}

findMostFrequentNumber([1]) // 1
findMostFrequentNumber([1, 2, 3, 2]) // 2
findMostFrequentNumber([1, 2, 3, 2, 3, 4]) // 2

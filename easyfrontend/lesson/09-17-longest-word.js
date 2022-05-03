//write a function to find the longest word

// for i
function findLongestWord(stringList) {
  let longestWord = stringList[0]
  for (let i = 0; i < stringList.length; i++) {
    if (longestWord.length < stringList[i].length) {
      longestWord = stringList[i]
    }
  }
  return longestWord
}
console.log(findLongestWord(['hello', 'frontend', 'backend']))

// forEach
function findLongestWordEach(stringList) {
  let longestWord = stringList[0]
  stringList.forEach((word) => {
    if (longestWord.length < word.length) {
      longestWord = word
    }
  })
  return longestWord
}
console.log(findLongestWordEach(['hello', 'frontend', 'backend']))

//reduce
function findWordReduce(stringList) {
  return stringList.reduce((word, longestWord) =>
    word.length > longestWord.length ? word : longestWord
  )
}
console.log(
  '🚀 ~ file: 09-17-longest-word.js ~ line 29 ~ findWordReduce ~ findWordReduce',
  findWordReduce(['hello', 'frontend', 'backend'])
)

// export function statisticsWords(str) {
//   if (str === '') return {}
//   const statistics = {}
//   str
//     .split(' ')
//     .filter((x) => x !== '')
//     .forEach((x) => {
//       if (statistics[x]) {
//         statistics[x] += 1
//       } else {
//         statistics[x] = 1
//       }
//     })
//   return statistics
// }

export function statisticsWords(str) {
  if (str === '') return {}
  return str
    .split(' ')
    .filter((x) => x !== '')
    .reduce((statistics, word) => {
      statistics[word] =
        statistics[word] !== undefined ? statistics[word] + 1 : 1
      return statistics
    }, {})
}

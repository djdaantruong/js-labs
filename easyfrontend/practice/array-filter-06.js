// delegate: uy thac, uy quyen
// 123 --> '123' --> '1'
function getTheFirstDigit(number) {
  const unsignedNumber = Math.abs(number)
  const firstDigitCharacter = unsignedNumber.toString().charAt(0)
  return Number.parseInt(firstDigitCharacter)
}
// export function findAllNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return []
//   const filteredList = []
//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i]
//     const firstDigit = getTheFirstDigit(number)
//     if (firstDigit % 2 === 1) filteredList.push(number)
//   }
//   return filteredList
// }
// RECOMMENDED
export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return []
  return numberList.filter((number) => getTheFirstDigit(number) % 2 === 1)
}

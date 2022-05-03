function getTicketPrice(age) {
  // your code here
  if (age <= 0 || age > 125) return -1
  let result

  if (age < 6 || age >= 70) return (result = 0)
  if (age >= 6 && age <= 12) return (result = 20000)
  if (age > 12) return (result = 50000)

  return result
}

console.log(
  '🚀 ~ file: 05-12-main.js ~ line 2 ~ getTicketPrice ~ getTicketPrice',
  getTicketPrice(7)
)

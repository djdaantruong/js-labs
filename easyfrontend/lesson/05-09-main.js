//write a function to classify student
//receive mask as a number, output as below
//mask > 8        --> 'Excellenge'
//7 <= mask <= 8  --> 'Good'
//4 <= mask <= 6  --> 'Not good'
//mask < 4        --> 'Bad'
//console result control alt L
//comment console alt shift c
//delete comment console alt shift u
//delete console alt shift d

//v1
function classifyStudent(mask) {
  let result

  if (mask > 8) result = 'Excellenge'
  else if (mask >= 7) result = 'Good'
  else if (mask >= 4) result = 'Not good'
  else result = 'Bad'

  return result
}

//v2
function classifyStudent(mask) {
  //validate argments
  //mask should be in range of [0, 10]
  if (mask < 0 || mask > 10) return ''

  let result = 'Bad'

  if (mask > 8) result = 'Excellenge'
  else if (mask >= 7) result = 'Good'
  else if (mask >= 4) result = 'Not good'

  return result
}

//v3
function classifyStudent(mask) {
  if (mask < 0 || mask > 10) return 'Invalid mask'

  if (mask > 8) return 'Excellenge'
  if (mask >= 7) return 'Good'
  if (mask >= 4) return 'Not good'

  return 'Bad'
}

console.log(
  '🚀 ~ file: 05-09-main.js ~ line 18 ~ classifyStudent:',
  classifyStudent(12)
)
console.log(
  '🚀 ~ file: 05-09-main.js ~ line 18 ~ classifyStudent:',
  classifyStudent(7)
)
console.log(
  '🚀 ~ file: 05-09-main.js ~ line 18 ~ classifyStudent:',
  classifyStudent(5)
)
console.log(
  '🚀 ~ file: 05-09-main.js ~ line 18 ~ classifyStudent:',
  classifyStudent(2)
)

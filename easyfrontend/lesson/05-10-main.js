//console result control alt L
//comment console alt shift c
//delete comment console alt shift u
//delete console alt shift d

function classifyStudent(mask) {
  let result

  switch (mask) {
    case 1:
    case 2:
    case 3: {
      result = 'Bad'
      break
    }

    case 4:
    case 5:
    case 6: {
      result = 'Not Good'
      break
    }

    case 7:
    case 8: {
      result = 'Good'
      break
    }

    case 9:
    case 10: {
      result = 'excellence'
      break
    }

    default: {
      result = 'Invalid mask'
    }
  }

  return result
}
console.log(
  '🚀 ~ file: 05-10-main.js ~ line 43 ~ classifyStudent',
  classifyStudent(12)
)

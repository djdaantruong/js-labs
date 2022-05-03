// A list of error codes from server
// E01: Invalid username of password
// E02: Too many attempts
// E03: Missing data
// Other code: Some thing went wrong
// Write a function that take errorCode and return the according message

//v1 Ok
function getErrorCode(errorCode) {
  let message = ''

  switch (errorCode) {
    case 'E01': {
      message = 'Invalid username of password'
      break
    }

    case 'E02': {
      message = 'Too many attempts'
      break
    }

    case 'E03': {
      message = 'Missing data'
      break
    }

    default: {
      message = 'Some thing went wrong'
    }
  }

  return message
}

//v2 Good, recommend
function getErrorCode(errorCode) {
  let messageMap = {
    E01: 'Invalid username of password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  }

  //const message = messageMap[errorCode] ? messageMap[errorCode] : 'Some thing went wrong')
  return messageMap[errorCode] || 'Some thing went wrong'
}

console.log(
  '🚀 ~ file: 05-11-main.js ~ line 9 ~ getErrorCode ~ getErrorCode',
  getErrorCode('E03')
)

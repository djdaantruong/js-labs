//write a function to check if a number a positive aven number
//If yes, return true. Ortherwise return false

//v1
function isPositiveEvenNumber(n) {
  let isValid //undefined

  //checking..
  if (n > 0 && n % 2 === 0) {
    isValid = true
  } else {
    isValid = false
  }

  return isValid
}

//v2
function isPositiveEvenNumber(n) {
  let isValid = false

  //checking..
  if (n > 0 && n % 2 === 0) {
    isValid = true
  }

  return isValid
}

//v3
function isPositiveEvenNumber(n) {
  if (n > 0 && n % 2 === 0) {
    isValid = true
  }

  return false
}

//v4
function isPositiveEvenNumber(n) {
  return n > 0 && n % 2 === 0
}

console.log(isPositiveEvenNumber(5))

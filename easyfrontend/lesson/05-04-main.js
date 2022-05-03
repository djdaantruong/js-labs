// - Nếu là số dương thì ...
function checkNumber1(n) {
  if (n > 0) {
  }
}
// - Nếu là số dương chẵn ...
function checkNumber2(n) {
  if (n > 0 && n % 2 === 0) {
  }
}

// - Nếu là số dương chẵn và lớn hơn 10 thì ...
function checkNumber3(n) {
  if (n > 0 && n % 2 === 0 && n > 10) {
  }
}

// - Nếu là số dương chẵn chia hết cho 5 và lớn hơn 10 ...
function checkNumber3(n) {
  if (n > 0 && n % 2 === 0 && n > 10 && n % 5 === 0) {
  }
}

// - Nếu là số dương chẵn hoặc số âm lẻ ...
const isEvenPositive = n > 0 && n % 2 === 0
const isEvenNegative = n < 0 && n % 2 !== 0

function checkNumber2(n) {
  if (isEvenPositive || isEvenNegative) {
  }
}

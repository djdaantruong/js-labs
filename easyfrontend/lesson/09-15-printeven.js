// Array exercises
// 1. print numbers: 1 -> 10
// 2. print even numbers: [2, 4, 6, 8, 10]
// 3. print even numbers but less than n

//1
function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i)
  }
}

printNumbers()

//2
function printEvenNumbers() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i)
  }
}

printEvenNumbers()

//3
function printEvenNumbersThanN(n) {
  if (n < 2) return -1

  for (let i = 2; i < n; i += 2) {
    console.log(i)
  }
}

printEvenNumbersThanN(20)

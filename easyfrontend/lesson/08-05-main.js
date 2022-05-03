//Object exercises
//1. Create an object student with name is EF and age is 18
const student = {}
student.name = 'EF'
student.age = 18

console.log(student)

//---
const student1 = {
  name: 'EF',
  name: 'Hau Nguyen',
  age: 18,
}
console.log(student1)

//2. Check if an object is empty (means have no key)
//{} --> no keys --> length of key list is 0
function isEmpty(obj) {
  return Object.keys(obj).length === 0
}
console.log(isEmpty({}))
console.log(isEmpty({ id: 1 }))

// let data = {}
// data = { id: 1 }
// data && data.id
// data?.id

//3. Get average mark of an object
//calcMark({math: 10, english: 8})
function calcMark(mark) {
  if (!mark) return -1

  //avg=sum/length
  const length = Object.keys(mark).length
  console.log('🚀 ~ file: 08-05-main.js ~ line 37 ~ calcMark ~ length', length)

  let sum = 0
  for (const key in mark) {
    const value = mark[key]
    sum += value
  }
  return (sum / length).toFixed(1)
}
console.log(
  '🚀 ~ file: 08-05-main.js ~ line 33 ~ calcMark ~ calcMark',
  calcMark({ math: 10, english: 7 })
)

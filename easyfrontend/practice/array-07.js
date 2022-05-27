// const studentList = [
//   { id: 1, name: 'Alice', gender: 'male' },
//   { id: 2, name: 'aliCE', gender: 'female' },
//   { id: 3, name: 'Easy Frontend', gender: 'male' },
// ]

// FIXME:
// TODO:

function isAlice(student) {
  if (!student) return false
  return student.gender === 'female' && student.name.toLowerCase() === 'alice'
}

// for...i
export function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false
  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i]
    console.log(student)
    if (isAlice(student)) return true
  }
  return false
}

// find index

const studentList = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Frontend' },
  { id: 1, name: 'Poul' },
]

// for...i
export function findStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return -1
  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i]
    if (student.id === studentId) return i
  }
  return -1
}

// for..i find lastindex
// function findStudentById(studentList, studentId) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return -1
//   const lastIndex = []
//   for (let i = 0; i < studentList.length; i++) {
//     const student = studentList[i]
//     if (student.id === studentId) {
//       lastIndex.push(i)
//     }
//   }
//   if (lastIndex.length >= 1) {
//     return lastIndex[lastIndex.length - 1]
//   } else {
//     return -1
//   }
// }

// findIndex
// function findStudentById(studentList, studentId) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return -1
//   return studentList.findIndex((student) => student.id === studentId)
// }

// console.log(findStudentById(studentList, 2)) // 0

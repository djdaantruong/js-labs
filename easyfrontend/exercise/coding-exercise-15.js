function isEqual(obj1, obj2) {
  const length1 = Object.keys(obj1).length
  const length2 = Object.keys(obj2).length
  return length1 === length2 && JSON.stringify(obj1) === JSON.stringify(obj2)
}
console.log(
  '🚀 ~ file: coding-exercise-15.js ~ line 2 ~ isEqual ~ isEqual',
  isEqual({ name: 'Bob' }, { name: 'Alice', age: 18 })
)

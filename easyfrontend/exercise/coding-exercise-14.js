function cloneObject(obj) {
  // your code here
  //const cloneObj = new Object(obj)
  const cloneObj = JSON.parse(JSON.stringify(obj))
  console.log(cloneObj === obj)
  return cloneObj
}
console.log(
  '🚀 ~ file: coding-exercise-14.js ~ line 2 ~ cloneObject ~ cloneObject',
  cloneObject({ name: 'Bob', math: 9 })
)

// write a js function to parameterize a String
// Eg: parameterize('Code JS Is Fun') --> 'code-js-is-fun'
// toLowerCase()
// p1: replaceAll()
// p2: split and join

function parameterize(str) {
  return str.toLowerCase().replaceAll('', '-')
  return str.toLowerCase().spilit('').join('-')
}

console.log(parameterize('Code JS Is Fun'))

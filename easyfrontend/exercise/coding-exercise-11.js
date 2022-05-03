// using split
function extractDomainV1(email) {
  // your code here
  const emailDomain = email.split('@')
  return emailDomain[1]
}
console.log(
  '🚀 ~ file: coding-exercise-11.js ~ line 3 ~ extractDomainV1 ~ extractDomainV1',
  extractDomainV1('alice@abc.com')
)

// using indexOf() and slice()
function extractDomainV2(email) {
  // your code here
  if (email == '') return ''
  const emailDomain2 = email.indexOf('@')
  return email.slice(emailDomain2 + 1)
}

console.log(
  '🚀 ~ file: coding-exercise-11.js ~ line 14 ~ extractDomainV2 ~ extractDomainV2',
  extractDomainV2('alice@gmail.com')
)

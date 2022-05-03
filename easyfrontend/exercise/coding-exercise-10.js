// using indexOf()
function isSecureUrlV1(url) {
  //your code here
  const urlWSS = url.indexOf('wss')
  const urlHTPPS = url.indexOf('https')
  if (urlWSS >= 0 || urlHTPPS >= 0) return true
  return false
}

console.log(
  '🚀 ~ file: coding-exercise-10.js ~ line 3 ~ isSecureUrlV1 ~ isSecureUrlV1',
  isSecureUrlV1('http://devchallenges.io/')
)

// using startsWith()
function isSecureUrlV2(url) {
  // your code here
  return url.startsWith('wss') || url.startsWith('https')
}

console.log(
  '🚀 ~ file: coding-exercise-10.js ~ line 19 ~ isSecureUrlV2 ~ isSecureUrlV2',
  isSecureUrlV2('https://devchallenges.io/')
)

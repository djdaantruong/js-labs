// String exercise
// Check if a string contains an email address with '@gmail.com' of not
function checkMail(str) {
  if (str === '') return ''

  //   const addressMail = str.slice(-10)
  //   return addressMail === '@gmail.com' ? true : false

  //recommend
  return str.includes('@gmail.com')
  //  return str.indexOf('@gmail.com')
  //  return str.lastIndexOf('@gmail.com')
}

console.log(
  '🚀 ~ file: 07-08-main.js ~ line 4 ~ checkMail ~ checkMail',
  checkMail('didaantruong@gm.com')
)

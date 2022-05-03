function sayHello(languageCode) {
  // your code here ...
  const languageMap = {
    en: 'Hello',
    vi: 'Xin chao',
    fr: 'Bonjour',
    cn: 'Nǐn hǎo',
    ja: 'Konnichiwa',
  }

  return languageMap[languageCode] || 'Hello'
}

console.log(
  '🚀 ~ file: coding-exercise2.js ~ line 2 ~ sayHello ~ sayHello(languageCode)',
  sayHello('vi')
)

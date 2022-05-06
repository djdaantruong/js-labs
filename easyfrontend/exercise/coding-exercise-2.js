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

export { sayHello, languageMap } from './coding-exercise-2'

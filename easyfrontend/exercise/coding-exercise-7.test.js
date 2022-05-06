import { removeVowel } from './coding-exercise-7'

describe('removeVowel()', () => {
  test('should return "" when data input is empty string', () => {
    expect(removeVowel('')).toMatch('')
  })

  test('should return string removed ueoai', () => {
    expect(removeVowel('say hello')).toMatch('sy hll')
  })
})

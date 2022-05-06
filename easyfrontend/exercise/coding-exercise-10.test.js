import { isSecureUrlV1, isSecureUrlV2 } from './coding-exercise-10'

describe('isSecureUrlV1()', () => {
  test('should return false when url not sercuriti', () => {
    expect(isSecureUrlV1('http://devchallenges.io/')).toBe(false)
  })

  test('should return true when url has sercuriti', () => {
    expect(isSecureUrlV1('https://devchallenges.io/')).toBe(true)
  })
})

describe('isSecureUrlV2()', () => {
  test('should return false when url not sercuriti', () => {
    expect(isSecureUrlV2('http://devchallenges.io/')).toBe(false)
  })

  test('should return true when url has sercuriti', () => {
    expect(isSecureUrlV2('https://devchallenges.io/')).toBe(true)
  })
})

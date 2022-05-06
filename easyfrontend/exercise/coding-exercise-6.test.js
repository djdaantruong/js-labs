import { isSymmetricNumber } from './coding-exercise-6'

describe('isSymmetricNumber()', () => {
  test('should return -1 if data input undefined', () => {
    expect(isSymmetricNumber(-55)).toBe(-1)
  })

  test('should return false when number not symmetric', () => {
    expect(isSymmetricNumber(123)).toBe(false)
    expect(isSymmetricNumber(406)).toBe(false)
  })

  test('should return true when number is symmetric', () => {
    expect(isSymmetricNumber(121)).toBe(true)
    expect(isSymmetricNumber(22)).toBe(true)
    expect(isSymmetricNumber(1)).toBe(true)
  })
})

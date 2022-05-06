import { getMaxDigits } from './coding-exercise-4'

describe('getMaxDigits()', () => {
  test('should return -1 when data input is undefined', () => {
    expect(getMaxDigits(-5)).toBe(-1)
  })

  test('should return max digits suitable', () => {
    expect(getMaxDigits(967)).toBe(9)
    expect(getMaxDigits(123)).toBe(3)
  })
})

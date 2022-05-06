import { compareNumber } from './coding-exercise-5'

describe('compareNumber()', () => {
  test('should return 1 if a > b', () => {
    expect(compareNumber(9, 7)).toBe(1)
  })

  test('should return 0 if a === b', () => {
    expect(compareNumber(6, 6)).toBe(0)
  })

  test('should return -1 if a < b', () => {
    expect(compareNumber(2, 3)).toBe(-1)
  })
})

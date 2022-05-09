import { isIncreasingNumberV1, isIncreasingNumberV2 } from './number-01'

describe('isIncreasingNumberV1(n)', () => {
  test('should return false when n < 10', () => {
    // expect(isIncreasingNumber(0)).toBe(false);
    // expect(isIncreasingNumber(2)).toBe(false)
    // expect(isIncreasingNumber(3)).toBe(false)
    // expect(isIncreasingNumber(4)).toBe(false)

    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isIncreasingNumberV1(x)).toBe(false)
    })
  })

  test('should false when n is not an increasing number', () => {
    ;[11, 444, 666666, 324, 7853].forEach((x) => {
      expect(isIncreasingNumberV1(x)).toBe(false)
    })
  })

  test('should true when n is an increasing number', () => {
    ;[16, 123, 45689, 379].forEach((x) => {
      expect(isIncreasingNumberV1(x)).toBe(true)
    })
  })
})

describe('isIncreasingNumberV2(n)', () => {
  test('should return false when n < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isIncreasingNumberV2(x)).toBe(false)
    })
  })

  test('should false when n is not an increasing number', () => {
    ;[11, 444, 666666, 324, 7853].forEach((x) => {
      expect(isIncreasingNumberV2(x)).toBe(false)
    })
  })

  test('should true when n is an increasing number', () => {
    ;[16, 123, 45689, 379].forEach((x) => {
      expect(isIncreasingNumberV2(x)).toBe(true)
    })
  })
})

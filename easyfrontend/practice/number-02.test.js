import { isDecreasingNumberV1 } from './number-02'
describe('isDecreasingNumberV1(n)', () => {
  test('should return false when n < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isDecreasingNumberV1(x)).toBe(false)
    })
  })

  test('should false when n is not an decreasing number', () => {
    ;[16, 123, 45689, 379, 555, 8888].forEach((x) => {
      expect(isDecreasingNumberV1(x)).toBe(false)
    })
  })

  test('should true when n is an increasing number', () => {
    ;[54, 91, 5421, 987].forEach((x) => {
      expect(isDecreasingNumberV1(x)).toBe(true)
    })
  })
})

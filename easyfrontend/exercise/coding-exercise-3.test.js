import { getTaxiCount } from './coding-exercise-3'

describe('getTaxiCount()', () => {
  test('should return 1 taxi 4 slot when taxi count <= 4 ', () => {
    expect(getTaxiCount(3)).toBe(1)
  })

  test('should return 1 taxi 7 slot when taxi count > 4 ', () => {
    expect(getTaxiCount(6)).toBe(1)
  })

  test('should return taxi count follow people', () => {
    expect(getTaxiCount(10)).toBe(2)
  })

  test('should return taxi count follow people', () => {
    expect(getTaxiCount(20)).toBe(3)
  })
})
